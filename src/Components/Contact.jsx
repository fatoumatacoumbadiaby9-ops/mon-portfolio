import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white flex justify-center items-center"
    >
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">

        <h2 className="text-4xl font-bold text-center mb-6">
          Contactez-moi
        </h2>

        <form className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Votre nom"
            className="p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Votre email"
            className="p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            rows="4"
            placeholder="Votre message"
            className="p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition duration-300"
          >
            Envoyer 🚀
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;