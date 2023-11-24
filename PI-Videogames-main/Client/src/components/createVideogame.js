import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../../redux/actions";

const CreateVideogame = () => {
  const [input, setInput] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    summary: "",
    image: "",
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInput(input);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(createBook(input));
      setInput({
        title: "",
        author: "",
        genre: "",
        year: "",
        summary: "",
        image: "",
      });
      setErrors({});
      alert("Videogame created successfully!");
    }
  };

  const validateInput = (input) => {
    let errors = {};

    if (!input.title || input.title.length > 35) {
      errors.title = "Title is required and should be less than 35 characters";
    }

    if (!input.author || !/^[A-Za-z\s]+$/.test(input.author)) {
      errors.author = "Author is required and should contain only letters";
    }

    if (!input.genre || !/^[A-Za-z\s]+$/.test(input.genre)) {
      errors.genre = "Genre is required and should contain only letters";
    }

    if (
      !input.year ||
      isNaN(input.year) ||
      input.year < 1700 ||
      input.year > 2023
    ) {
      errors.year = "Year is required and should be a valid year";
    }

    if (!input.summary || input.summary.length > 200) {
      errors.summary =
        "Summary is required and should be less than 200 characters";
    }

    if (!input.image || !/\.(jpg|jpeg)$/.test(input.image)) {
      errors.image = "Image is required and should be a JPG file";
    }

    return errors;
  };

  return (
    <div>
      <h2>Create Videogame</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={handleChange}
          />
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={input.author}
            onChange={handleChange}
          />
          {errors.author && <p>{errors.author}</p>}
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={input.genre}
            onChange={handleChange}
          />
          {errors.genre && <p>{errors.genre}</p>}
        </div>
        <div>
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={input.year}
            onChange={handleChange}
          />
          {errors.year && <p>{errors.year}</p>}
        </div>
        <div>
          <label>Summary:</label>
          <textarea
            name="summary"
            value={input.summary}
            onChange={handleChange}
          ></textarea>
          {errors.summary && <p>{errors.summary}</p>}
        </div>
        <div>
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={input.image}
            onChange={handleChange}
          />
          {errors.image && <p>{errors.image}</p>}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateVideogame;