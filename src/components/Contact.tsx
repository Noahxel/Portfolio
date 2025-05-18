import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const EMAIL = "noah.le-veve@epitech.eu";

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_ld3z6gc";
const EMAILJS_TEMPLATE_ID = "template_g6g2yyj";
const EMAILJS_PUBLIC_KEY = "ahZtlH2HdBhTAv-i9";

// 5 minutes in milliseconds
const COOLDOWN_PERIOD = 5 * 60 * 1000;

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'warning' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  useEffect(() => {
    // Check remaining cooldown on component mount
    const lastSendTime = localStorage.getItem('lastEmailSendTime');
    if (lastSendTime) {
      const timeSinceLastSend = Date.now() - parseInt(lastSendTime);
      if (timeSinceLastSend < COOLDOWN_PERIOD) {
        setCooldownRemaining(Math.ceil((COOLDOWN_PERIOD - timeSinceLastSend) / 1000));
      }
    }
  }, []);

  useEffect(() => {
    // Update cooldown timer
    let timer: NodeJS.Timeout;
    if (cooldownRemaining > 0) {
      timer = setInterval(() => {
        setCooldownRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldownRemaining]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check cooldown
    const lastSendTime = localStorage.getItem('lastEmailSendTime');
    if (lastSendTime) {
      const timeSinceLastSend = Date.now() - parseInt(lastSendTime);
      if (timeSinceLastSend < COOLDOWN_PERIOD) {
        const remainingTime = Math.ceil((COOLDOWN_PERIOD - timeSinceLastSend) / 1000);
        setCooldownRemaining(remainingTime);
        setStatus({
          type: 'warning',
          message: t('contact.form.cooldown', { seconds: remainingTime })
        });
        return;
      }
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    const time = new Date();

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: time.toLocaleString(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Store send time in localStorage
      localStorage.setItem('lastEmailSendTime', Date.now().toString());
      setCooldownRemaining(COOLDOWN_PERIOD / 1000);

      setStatus({
        type: 'success',
        message: t('contact.form.success')
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({
        type: 'error',
        message: t('contact.form.error')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCooldownTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-8">
            {t('contact.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-textPrimary">
                {t('contact.subtitle')}
              </h3>
              <p className="text-textSecondary">
                {t('contact.description')}
              </p>
              <div className="space-y-2">
                <p className="text-secondary">{t('contact.email.label')}</p>
                <p className="text-textSecondary">{EMAIL}</p>
              </div>
              <div className="space-y-2">
                <p className="text-secondary">{t('contact.location.label')}</p>
                <p className="text-textSecondary">{t('contact.location.value')}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {status.type && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-800'
                      : status.type === 'warning'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {status.message}
                </div>
              )}
              {cooldownRemaining > 0 && (
                <div className="text-sm text-textSecondary text-center">
                  {t('contact.form.nextSend')}: {formatCooldownTime(cooldownRemaining)}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-textPrimary mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-tertiary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                  disabled={isSubmitting || cooldownRemaining > 0}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-textPrimary mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-tertiary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                  disabled={isSubmitting || cooldownRemaining > 0}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-textPrimary mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-tertiary text-textPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                  disabled={isSubmitting || cooldownRemaining > 0}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || cooldownRemaining > 0}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 