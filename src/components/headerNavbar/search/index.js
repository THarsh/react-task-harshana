import React from "react";
import { Formik } from "formik";
import { BsSearch } from "react-icons/bs";
const Search = () => {
    return (
        <Formik initialValues={{ search: "" }}>
            {({ values, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div className="search-wrapper">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search"
                        />
                        <button type="submit" className="search-button">
                            <BsSearch className="icon" />
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default Search;
