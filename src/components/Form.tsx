import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "@/components/Form.module.scss";

const schema = z.object({
  firstname: z.string().min(1, {
    message: "Please enter firtname",
  }),
  lastname: z.string().min(1, {
    message: "Please enter lastname",
  }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email",
    })
    .min(1, {
      message: "Please enter email",
    }),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const form = new FormData();
    form.append("firstname", data.firstname);
    form.append("lastname", data.lastname);
    form.append("email", data.email);

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        body: form,
      });
      if (!res.ok) {
        console.error("サーバーエラー");
      } else {
        alert("登録が正常に完了しました");
      }
    } catch (error) {
      console.error("通信に失敗しました", error);
    }
  };

  return (
    <div className="Form mt-[2rem] bg-white px-[1.8125rem] py-[2.4rem] rounded-2xl shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-[2rem]">
          <div className="flex flex-col">
            <label htmlFor="firstname">Firstname</label>
            <input
              {...register("firstname")}
              id="firstname"
              className="border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] border-[#828282]"
            />
            {errors.firstname && (
              <p className="text-orange mt-[0.2rem]">
                {errors.firstname?.message as string}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastname">Lastname</label>
            <input
              {...register("lastname")}
              id="lastname"
              className="border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] border-[#828282]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">Company/Organization</label>
            <input
              {...register("lastname")}
              id="lastname"
              className="border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] border-[#828282]"
            />
            {errors.lastname && (
              <p className="text-orange mt-[0.2rem]">
                {errors.lastname?.message as string}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              id="email"
              className="border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] border-[#828282]"
              placeholder="hello@d2l.sg"
            />
            {errors.email && (
              <p className="text-orange mt-[0.2rem]">
                {errors.email?.message as string}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastname">Contact Number</label>
            <input
              {...register("lastname")}
              id="lastname"
              className="border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] border-[#828282]"
            />
            {errors.email && (
              <p className="text-orange mt-[0.2rem]">
                {errors.email?.message as string}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastname">Services you are interested in</label>
            <div className={styles.select}>
              <select
                {...register("lastname")}
                id="lastname"
                className="border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] border-[#828282] appearance-none w-full"
              >
                <option value="" defaultValue=""></option>
                <option key="A" value="B">
                  A
                </option>
                <option key="B" value="B">
                  B
                </option>
                <option key="C" value="C">
                  C
                </option>
              </select>
            </div>

            {errors.email && (
              <p className="text-orange mt-[0.2rem]">
                {errors.email?.message as string}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastname">How did you hear about us?</label>
            <div className={styles.select}>
              <select
                {...register("lastname")}
                id="lastname"
                className="border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] border-[#828282] appearance-none w-full"
              >
                <option value="" defaultValue=""></option>
                <option key="A" value="B">
                  A
                </option>
                <option key="B" value="B">
                  B
                </option>
                <option key="C" value="C">
                  C
                </option>
              </select>
            </div>
            {errors.email && (
              <p className="text-orange mt-[0.2rem]">
                {errors.email?.message as string}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastname">Message</label>
            <textarea
              {...register("lastname")}
              id="lastname"
              className="border-2 rounded p-[0.5rem] text-[1.25rem] mt-[0.3rem] border-[#828282]"
            />
            {errors.email && (
              <p className="text-orange mt-[0.2rem]">
                {errors.email?.message as string}
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
        </div>
      </form>
    </div>
  );
}
