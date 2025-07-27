import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8">
            {t("about.title")}
          </h2>
          <div className="space-y-6 text-textSecondary">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
            <p>{t("about.paragraph4")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
