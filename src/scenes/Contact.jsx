import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
//import emailjs from "emailjs-com";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = await trigger();
    if (!isValid) return;

    try {
      const form = e.target;
      await emailjs.sendForm(
        "Contact-117117",
        "template_fspg0ue",
        form,
        "yXpBnOg1hAOIC71H4"
      );
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error(error);
      alert("Hubo un error al enviar el mensaje 😥");
    }
  };

  return (
    <section id="contact" className="contact pt-32 pb-16">
      {/* HEADINGS */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5">
          <span className="text-yellow">CONTACT </span>ME
        </p>
        <div className="flex justify-center md:justify-start">
          <LineGradient width="w-2/3" />
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-10">
        {/* IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="../assets/contact-image.png" alt="contact" />
        </motion.div>

        {/* FORM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          {!isSubmitted ? (
            <form onSubmit={onSubmit}>
              <input
                className="w-full bg-blue font-semibold placeholder-grey p-3"
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
                name="name"
              />
              {errors.name && (
                <p className="text-grey text-opacity-50 mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 char."}
                </p>
              )}

              <input
                className="w-full bg-blue font-semibold placeholder-grey p-3 mt-5"
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                name="email"
              />
              {errors.email && (
                <p className="text-grey text-opacity-50 mt-1">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-full bg-blue font-semibold placeholder-grey p-3 mt-5"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", { required: true, maxLength: 2000 })}
                name="message"
              />
              {errors.message && (
                <p className="text-grey text-opacity-50 mt-1">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 char."}
                </p>
              )}

              <button
                className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
                type="submit"
              >
                SEND ME A MESSAGE
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center text-center p-8 bg-blue/10 rounded-xl border border-blue mt-10"
            >
              <p className="text-2xl font-semibold text-yellow mb-2">✅ Message Sent!</p>
              <p className="text-white text-opacity-80">
                Thank you for reaching out. I’ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-yellow text-deep-blue px-6 py-3 rounded-lg font-semibold hover:bg-red hover:text-white transition duration-500"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
