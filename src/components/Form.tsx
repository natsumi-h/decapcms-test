import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "@/components/Form.module.scss";
import { heardfromOptions, interestOptions, refinedSchema } from "@/formschema";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(refinedSchema),
  });

  const onSubmit = async (data: any) => {
    const form = new FormData();
    form.append("firstname", data.firstname);
    form.append("lastname", data.lastname);
    form.append("email", data.email);
    form.append("company", data.company);
    form.append("contact", data.contact);
    form.append("interest", data.interest);
    form.append("heardfrom", data.heardfrom);
    form.append("message", data.message);

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        body: form,
      });
      if (!res.ok) {
        console.error("Server error");
      } else {
        alert("Inquiry sent successfully! Our team will get back to you soon.");
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  return (
    <div className="Form mt-[2rem] bg-white px-[1.8125rem] py-[2.4rem] rounded-2xl shadow-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[2rem]"
      >
        {/* Firstname */}
        <div className="flex flex-col">
          <label htmlFor="firstname">Firstname</label>
          <input
            {...register("firstname")}
            id="firstname"
            className={`border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] ${
              errors.firstname ? "border-orange" : "border-[#828282]"
            }`}
            type="text"
          />
          {errors.firstname && (
            <p className="text-orange mt-[0.2rem]">
              {errors.firstname?.message as string}
            </p>
          )}
        </div>

        {/* Lastname */}
        <div className="flex flex-col">
          <label htmlFor="lastname">Lastname</label>
          <input
            {...register("lastname")}
            id="lastname"
            className={`border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] ${
              errors.lastname ? "border-orange" : "border-[#828282]"
            }`}
            type="text"
          />
          {errors.lastname && (
            <p className="text-orange mt-[0.2rem]">
              {errors.lastname?.message as string}
            </p>
          )}
        </div>

        {/* Company */}
        <div className="flex flex-col">
          <label htmlFor="company">Company/Organization</label>
          <input
            {...register("company")}
            id="company"
            className={`border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] ${
              errors.company ? "border-orange" : "border-[#828282]"
            }`}
            type="text"
          />
          {errors.company && (
            <p className="text-orange mt-[0.2rem]">
              {errors.company?.message as string}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            id="email"
            className={`border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] ${
              errors.email ? "border-orange" : "border-[#828282]"
            }`}
            placeholder="hello@d2l.sg"
            type="email"
          />
          {errors.email && (
            <p className="text-orange mt-[0.2rem]">
              {errors.email?.message as string}
            </p>
          )}
        </div>

        {/* Email confirm */}
        <div className="flex flex-col">
          <label htmlFor="emailconfirm">Email (Confirm)</label>
          <input
            {...register("emailconfirm")}
            id="emailconfirm"
            className={`border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] ${
              errors.emailconfirm ? "border-orange" : "border-[#828282]"
            }`}
            placeholder="hello@d2l.sg"
            type="email"
          />
          {errors.emailconfirm && (
            <p className="text-orange mt-[0.2rem]">
              {errors.emailconfirm?.message as string}
            </p>
          )}
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <label htmlFor="contact">Contact Number</label>
          <input
            {...register("contact")}
            id="contact"
            className={`border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] ${
              errors.contact ? "border-orange" : "border-[#828282]"
            }`}
            type="tel"
          />
          {errors.contact && (
            <p className="text-orange mt-[0.2rem]">
              {errors.contact?.message as string}
            </p>
          )}
        </div>

        {/* Interest */}
        <div className="flex flex-col">
          <label htmlFor="interest">Services you are interested in</label>
          <div className={styles.select}>
            <select
              {...register("interest")}
              id="interest"
              className={`border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] ${
                errors.interest ? "border-orange" : "border-[#828282]"
              } appearance-none w-full`}
            >
              <option value="" defaultValue=""></option>
              {interestOptions.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
          </div>

          {errors.interest && (
            <p className="text-orange mt-[0.2rem]">
              {errors.interest?.message as string}
            </p>
          )}
        </div>

        {/* Hou you heard */}
        <div className="flex flex-col">
          <label htmlFor="heardfrom">How did you hear about us?</label>
          <div className={styles.select}>
            <select
              {...register("heardfrom")}
              id="heardfrom"
              className={`border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] ${
                errors.heardfrom ? "border-orange" : "border-[#828282]"
              } appearance-none w-full`}
            >
              <option value="" defaultValue=""></option>
              {heardfromOptions.map((heardfrom) => (
                <option key={heardfrom} value={heardfrom}>
                  {heardfrom}
                </option>
              ))}
            </select>
          </div>
          {errors.heardfrom && (
            <p className="text-orange mt-[0.2rem]">
              {errors.heardfrom?.message as string}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            {...register("message")}
            id="message"
            className={`border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] ${
              errors.message ? "border-orange" : "border-[#828282]"
            }`}
          />
          {errors.message && (
            <p className="text-orange mt-[0.2rem]">
              {errors.message?.message as string}
            </p>
          )}
        </div>
        <p>
          By submitting this form you confirm that you agree to our{" "}
          <a href="/terms/" className="underline">
            terms and conditions
          </a>
          .
        </p>

        <div className="mt-[1.75rem] mx-auto">
          <button
            type="submit"
            className="py-[0.75rem] px-[4.406rem] bg-orange text-white ~text-[1rem]/[1.5625rem] leading-normal font-bold rounded-[0.5rem] inline-block hover:opacity-80 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
