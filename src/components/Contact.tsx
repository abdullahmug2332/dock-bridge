export default function Contact() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
          <p className="color text-3xl angello">Contact Us</p>

            <h2 className="text-4xl md:text-5xl salsify font-bold text-gray-900 mb-6 leading-tight text-pretty">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Have questions about our seafood or your order? Our team is here to help you with quick and reliable support.
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <input
                  placeholder="Your Name"
                  className="w-full px-4 py-3  rounded-lg bg-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3  rounded-lg bg-white "
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3  rounded-lg bg-white "
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message here..."
                  rows={4}
                  className="w-full px-4 py-3  rounded-lg bg-white  resize-none"
                />
              </div>
            </div>

            <button className=" bg2  text-white px-7 py-2 text-md rounded-md">
              Send Message
            </button>
          </div>

          <div className="block">
            <img src="/fish.png" alt="fish" className="w-full rounded-2xl"  />
          </div>
        </div>
      </section>
  );
}