import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemaValid/authSchema";
import instance from "../axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    data.role = "user";
    (async () => {
      try {
        await instance.post(`/register`, data);
        if (confirm("Register success, Login now")) {
          nav("/login");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" {...register("name", { required: true })} />
          {errors.name?.message && <p className="text-danger">{errors.name?.message.toString()}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" {...register("email", { required: true })} autoComplete="current-email" />
          {errors.email?.message && <p className="text-danger">{errors.email?.message.toString()}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", { required: true })}
            autoComplete="current-password"
          />
          {errors.password?.message && <p className="text-danger">{errors.password?.message.toString()}</p>}
        </div>
        <div className="mb-3">
          <button className="btn btn-primary w-100" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
