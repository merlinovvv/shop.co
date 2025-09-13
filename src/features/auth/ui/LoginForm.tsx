"use client";
import { useAuthStore } from "@/entities/user";
import { Form, Formik } from "formik";
import { Input } from "@/shared/ui";
import { Button } from "@/shared/ui";

export const LoginForm = () => {
  const { loadingLogin, getLogin, errorLogin } = useAuthStore();

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={(values) => getLogin(values)}>
      {({ values, handleChange }) => (
        <Form className="grid grid-cols-1 gap-3">
          <div className="col-span-12">
            <Input
              className="mt-2"
              variant="gray"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-12">
            <Input
              type="password"
              className="mt-2"
              variant="gray"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-12">
            <Button loading={loadingLogin} size="small" type="submit" className="w-full">
              Log In
            </Button>
          </div>
          {errorLogin?.message && (
            <ul className="col-span-12 text-red-500 font-bold">
              {Array.isArray(errorLogin?.message) ? (
                errorLogin?.message.map((msg, index) => (
                  <li key={index}>
                    {index + 1}. {msg}
                  </li>
                ))
              ) : (
                <li>{errorLogin?.message}</li>
              )}
            </ul>
          )}
        </Form>
      )}
    </Formik>
  );
};
