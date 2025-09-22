"use client";
import { useAuthStore } from "@/entities/user";
import { UploadPhoto } from "@/features/upload-photo";
import { Button, Input } from "@/shared/ui";
import { Form, Formik } from "formik";
import { AtSign, KeyRound, Link, User } from "lucide-react";

export const RegisterForm = () => {
  const { loadingRegister, getRegister, errorRegister } = useAuthStore();
  return (
    <Formik
      initialValues={{ email: "", password: "", name: "", avatar: "" }}
      onSubmit={(values) => getRegister(values)}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form className="grid grid-cols-1 gap-3">
          <div className="col-span-12">
            <Input
              icon={User}
              className="mt-2"
              variant="gray"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-12">
            <Input
              icon={AtSign}
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
              icon={KeyRound}
              type="password"
              className="mt-2"
              variant="gray"
              placeholder="Password"
              name="password"
              autoComplete="new-password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-12">
            <UploadPhoto onChange={(photo) => setFieldValue("avatar", photo)} className="mt-2" label="Upload avatar" />
          </div>
          <div className="col-span-12 text-center">or</div>
          <div className="col-span-12">
            <Input
              icon={Link}
              variant="gray"
              placeholder="Avatar link"
              name="avatar"
              value={values.avatar}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-12">
            <Button loading={loadingRegister} size="small" type="submit" className="w-full mt-2">
              Register
            </Button>
          </div>
          {errorRegister?.message && (
            <ul className="col-span-12 text-red-500 font-bold">
              {Array.isArray(errorRegister?.message) ? (
                errorRegister?.message.map((msg, index) => (
                  <li key={index}>
                    {index + 1}. {msg}
                  </li>
                ))
              ) : (
                <li>{errorRegister?.message}</li>
              )}
            </ul>
          )}
        </Form>
      )}
    </Formik>
  );
};
