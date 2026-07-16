import { useState } from "react";
import contactImg from "../../assets/images/contact/contact-img-1.webp";
import Input from "../../components/common/Input";
import FadeIn from "../../components/common/FadeIn";

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comments: string;
};

const Contact = () => {
  const [form, setForm] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange =
    (field: keyof ContactFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);

    // API Call
    // axios.post(...)
    // fetch(...)
  };

  return (
    <section id="contact" className="w-full bg-[#EFEFEF] overflow-hidden">
      <FadeIn className="relative w-full min-h-0 lg:min-h-[760px] flex flex-col lg:flex-row items-stretch">
        {/* Left Image */}
        <div className="relative lg:absolute lg:inset-y-0 lg:left-0 h-[320px] md:h-[450px] lg:h-full w-full lg:w-[45%]">
          <img
            src={contactImg}
            alt="Contact"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Contact Card */}
        <div className="relative lg:absolute lg:right-[4%] lg:top-1/2 lg:-translate-y-1/2 w-auto lg:w-[58%] bg-white rounded-2xl px-6 py-10 md:px-12 md:py-12 lg:px-16 lg:py-16 shadow-sm mx-4 my-8 lg:mx-0 lg:my-0 flex flex-col justify-center">
          <h2 className="mb-8 text-[32px] md:text-[44px] lg:text-[64px] font-inter-600 uppercase tracking-wide text-title-black">
            GET IN TOUCH
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Input
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange("firstName")}
              />

              <Input
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange("lastName")}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange("email")}
              />

              <Input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange("phone")}
              />
            </div>

            <Input
              type="textarea"
              rows={4}
              placeholder="Enter your comments here any?"
              value={form.comments}
              onChange={handleChange("comments")}
            />

            <button
              type="submit"
              className="cursor-pointer self-start bg-black hover:bg-neutral-800 rounded-[5px] px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
