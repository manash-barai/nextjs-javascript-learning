import React from "react";
import Link from "next/link";
const Forms = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full float-start flex-col">
      <h1 className="head_text text-left">
        {" "}
        <span className="blue_gradient"> {type}</span> Post{" "}
      </h1>
      <p className="desc text-left max-w-md">{type} and share</p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism "
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700">
            Your Prompt
          </span>
          <textarea
            name=""
            id=""
            className=" form_textarea"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write prompt"
            required
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700">
            Tag
          </span>

          <input
            name=""
            id=""
            className="form_input"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
          ></input>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4 ">
          <Link href="/" className="text-grey-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Forms;
