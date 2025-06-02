"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import Image from "next/image";
import { Country, State, City } from "country-state-city";
import { motion, AnimatePresence } from "framer-motion";
const CustomSelect = ({ label, options, onChange, value, error, innerRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={innerRef}>
      <div className="relative w-full" ref={dropdownRef}>
        <label className="text-sm font-tthoves-demibold mb-1 block">{label}</label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`w-full bg-[#fff] px-4 py-2 text-left flex justify-between items-center border ${error
            ? "border-red-500"
            : "border-dashed border-[#A9B8D5] focus:outline-none"
            }`}
        >
          <span className={`text-[#002561] ${!value && "text-[#002561]"}`}>
            {value || "Select"}
          </span>
          <Image
            alt="down-arrow"
            src="/admissions/apply-now/down-arrow.svg"
            width={18}
            height={18}
            className={`ml-2 transition-transform text-[#2050B1] ${isOpen ? "rotate-180" : ""
              }`}
          />
        </button>
        {isOpen && (
          <ul className="absolute left-0 right-0 text-[#3B76CB] w-full lg:w-1/2 bg-[#fff] shadow transition-all duration-300 ease-in-out overflow-hidden z-50 max-h-60 opacity-100">
            {options.map((opt) => (
              <li
                key={opt}
                className="px-4 hover:text-black cursor-pointer text-[#3B76CB] py-1"
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default function ApplicationForm() {
  const initialState = {
    title: "",
    firstName: "",
    lastName: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    education: "",
    institution: "",
    graduationYear: "",
    program: "",
    declaration1: false,
    declaration2: false,
  };


  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Disable body scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  useEffect(() => {
    const countryList = Country.getAllCountries();
    setCountries(countryList);
  }, []);

  useEffect(() => {
    const countryList = Country.getAllCountries();
    setCountries(countryList);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "nationality") {
      const selectedCountry = countries.find((c) => c.name === value);
      if (selectedCountry) {
        const stateList = State.getStatesOfCountry(selectedCountry.isoCode);
        setStates(stateList);
      } else {
        setStates([]);
      }
      setCities([]);
      setFormData({ ...formData, [name]: value, state: "", city: "" });
    }

    if (name === "state") {
      const selectedCountry = countries.find(
        (c) => c.name === formData.nationality
      );
      const selectedState = states.find((s) => s.name === value);
      if (selectedCountry && selectedState) {
        const cityList = City.getCitiesOfState(
          selectedCountry.isoCode,
          selectedState.isoCode
        );
        setCities(cityList);
      } else {
        setCities([]);
      }
      setFormData({ ...formData, [name]: value, city: "" });
    }

    setFormErrors({ ...formErrors, [name]: "" });
  };


  console.log(responseMsg)
  console.log(formData)
  const validate = () => {
    const errors = {};

    // Validate title
    if (!formData.title) {
      errors.title = "Please select a title (e.g., Mr., Ms., Mrs.).";
    }

    // Validate first name
    if (!formData.firstName) {
      errors.firstName = "First name is required.";
    } else if (formData.firstName.length < 2) {
      errors.firstName = "First name must be at least 2 characters long.";
    }

    // Validate last name
    if (!formData.lastName) {
      errors.lastName = "Last name is required.";
    } else if (formData.lastName.length < 2) {
      errors.lastName = "Last name must be at least 2 characters long.";
    }

    // Validate date of birth
    if (!formData.dobDay || !formData.dobMonth || !formData.dobYear) {
      errors.dob = "Please select a valid date of birth.";
    } else {
      const dob = new Date(
        `${formData.dobYear}-${formData.dobMonth}-${formData.dobDay}`
      );
      const today = new Date();
      if (dob > today) {
        errors.dob = "Date of birth cannot be in the future.";
      }
      if (dob.getFullYear() < today.getFullYear() - 100) {
        errors.dob = "Date of birth cannot be more than 100 years ago.";
      }
    }

    // Validate gender
    if (!formData.gender) {
      errors.gender = "Please select your gender.";
    }

    // Validate nationality
    if (!formData.nationality) {
      errors.nationality = "Please select your nationality.";
    }

    // Validate email
    if (!formData.email) {
      errors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    // Validate phone number
    if (!formData.phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be exactly 10 digits.";
    }

    // Validate city
    if (!formData.city) {
      errors.city = "City is required.";
    } else if (formData.city.length < 3) {
      errors.city = "City name must be at least 3 characters long.";
    }

    // Validate state
    if (!formData.state) {
      errors.state = "State is required.";
    } else if (formData.state.length < 3) {
      errors.state = "State name must be at least 3 characters long.";
    }

    // Validate education level
    if (!formData.education) {
      errors.education = "Please select your highest level of education.";
    }

    // Validate institution name
    if (!formData.institution) {
      errors.institution = "Institution name is required.";
    } else if (formData.institution.length < 3) {
      errors.institution =
        "Institution name must be at least 3 characters long.";
    }

    // Validate graduation year
    if (!formData.graduationYear) {
      errors.graduationYear = "Graduation year is required.";
    } else if (!/^\d{4}$/.test(formData.graduationYear)) {
      errors.graduationYear = "Graduation year must be a valid 4-digit year.";
    } else if (formData.graduationYear > new Date().getFullYear()) {
      errors.graduationYear = "Graduation year cannot be in the future.";
    }

    // Validate program
    if (!formData.program) {
      errors.program = "Please select the program you are applying for.";
    }

    // Validate declarations
    if (!formData.declaration1 || !formData.declaration2) {
      errors.declaration = "You must accept both declarations to proceed.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      const res = await fetch(
        "https://docs.ivistaz.com/wp-json/contact-form-7/v1/contact-forms/895/feedback",
        {
          method: "POST",
          body: form,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await res.json();
      if (result.status === "mail_sent") {
        setResponseMsg("Application submitted successfully!");
        setFormData(initialState);
        setFormErrors({});
        setFormErrors({});
        setShowPopup(true);
      } else {
        setResponseMsg("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      setResponseMsg("❌ Error submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto lg:px-0 px-4 py-8">
      <h2 className="text-3xl font-tthoves-bold mb-6">APPLICATION FORM:</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <CustomSelect
            label="NAME"
            options={["Mr.", "Ms.", "Mrs."]}
            onChange={(val) => setFormData({ ...formData, title: val })}
            value={formData.title}
            error={formErrors.title}
          />
          <div>
            <label className="text-sm font-tthoves-demibold mb-1 block">
              FIRST NAME
            </label>
            <input
              type="text"
              className={`w-full border ${formErrors.firstName
                ? "border-red-500"
                : "border-dashed border-[#A9B8D5] focus:outline-none"
                } p-2`}
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
                if (formErrors.firstName) {
                  setFormErrors({ ...formErrors, firstName: undefined });
                }
              }}
            />
            {formErrors.firstName && (
              <p className="text-red-600 text-sm">{formErrors.firstName}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-tthoves-demibold mb-1 block">
              LAST NAME
            </label>
            <input
              type="text"
              className={`w-full border ${formErrors.lastName
                ? "border-red-500"
                : "border-dashed border-[#A9B8D5] focus:outline-none"
                } p-2`}
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            {formErrors.lastName && (
              <p className="text-red-600 text-sm">{formErrors.lastName}</p>
            )}
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-4 gap-2 ">
            {["dobDay", "dobMonth", "dobYear"].map((key, i) => (
              <div key={key}>
                <label className="text-sm font-tthoves-demibold mb-1 block">
                  {["DD", "MM", "YYYY"][i]}
                </label>
                <select
                  className={`w-full border ${formErrors[key]
                    ? "border-red-500"
                    : "border-dashed border-[#A9B8D5] focus:outline-none"
                    } p-2`}
                  value={formData[key]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                >
                  <option value="">{["DD", "MM", "YYYY"][i]}</option>
                  {key === "dobDay" &&
                    [...Array(31)].map((_, j) => (
                      <option
                        key={j + 1}
                        value={String(j + 1).padStart(2, "0")}
                      >
                        {String(j + 1).padStart(2, "0")}
                      </option>
                    ))}
                  {key === "dobMonth" &&
                    [
                      "01 - Jan",
                      "02 - Feb",
                      "03 - Mar",
                      "04 - Apr",
                      "05 - May",
                      "06 - Jun",
                      "07 - Jul",
                      "08 - Aug",
                      "09 - Sep",
                      "10 - Oct",
                      "11 - Nov",
                      "12 - Dec",
                    ].map((month, idx) => (
                      <option
                        key={idx + 1}
                        value={String(idx + 1).padStart(2, "0")}
                      >
                        {month}
                      </option>
                    ))}
                  {key === "dobYear" &&
                    Array.from(
                      { length: 100 },
                      (_, j) => new Date().getFullYear() - j
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                </select>
                {formErrors[key] && (
                  <p className="text-red-600 text-sm">{formErrors[key]}</p>
                )}
              </div>
            ))}{" "}
            <div className="flex items-center justify-center pt-4 text-[#002561]">
              (Required)
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CustomSelect
            label="GENDER"
            options={["Male", "Female", "Non-Binary", "Prefer Not to Say"]}
            onChange={(val) => setFormData({ ...formData, gender: val })}
            value={formData.gender}
            error={formErrors.gender}
          />
          <div>
            <label className="block font-tthoves-demibold uppercase">
              Nationality
            </label>
            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {formErrors.nationality && (
              <p className="text-red-500 text-sm">{formErrors.nationality}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-tthoves-demibold mb-1 block">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className={`w-full border ${formErrors.email
                ? "border-red-500"
                : "border-dashed border-[#A9B8D5] focus:outline-none"
                } p-2`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {formErrors.email && (
              <p className="text-red-600 text-sm">{formErrors.email}</p>
            )}
          </div>
        </div>

        {/* Row 3 */}
        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-tthoves-demibold mb-1 block">
              PHONE NUMBER
            </label>
            <input
              type="text"
              className={`w-full border ${formErrors.phone
                ? "border-red-500"
                : "border-dashed border-[#A9B8D5] focus:outline-none"
                } p-2`}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            {formErrors.phone && (
              <p className="text-red-600 text-sm">{formErrors.phone}</p>
            )}
          </div>
          <div>
            <label className="block font-bold uppercase">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
              disabled={!states.length}
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            {formErrors.state && (
              <p className="text-red-500 text-sm">{formErrors.state}</p>
            )}
          </div>
          <div>
            <label className="block font-tthoves-demibold uppercase">
              City/Town
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border-dashed border-[#A9B8D5] border focus:outline-none p-2"
              disabled={!cities.length}
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            {formErrors.city && (
              <p className="text-red-500 text-sm">{formErrors.city}</p>
            )}
          </div>

        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CustomSelect
            label="HIGHEST LEVEL OF EDUCATION COMPLETED"
            options={["High School", "Undergraduate", "Postgraduate", "Other"]}
            onChange={(val) => setFormData({ ...formData, education: val })}
            value={formData.education}
            error={formErrors.education}
          />
          <div>
            <label className="text-sm font-tthoves-demibold mb-1 block">
              NAME OF LAST ATTENDED INSTITUTION
            </label>
            <input
              type="text"
              className={`w-full border ${formErrors.institution
                ? "border-red-500"
                : "border-dashed border-[#A9B8D5] focus:outline-none"
                } p-2`}
              value={formData.institution}
              onChange={(e) =>
                setFormData({ ...formData, institution: e.target.value })
              }
            />
            {formErrors.institution && (
              <p className="text-red-600 text-sm">{formErrors.institution}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-tthoves-demibold mb-1 block">
              GRADUATION YEAR
            </label>
            <input
              type="text"
              className={`w-full border ${formErrors.graduationYear
                ? "border-red-500"
                : "border-dashed border-[#A9B8D5] focus:outline-none"
                } p-2`}
              value={formData.graduationYear}
              onChange={(e) =>
                setFormData({ ...formData, graduationYear: e.target.value })
              }
            />
            {formErrors.graduationYear && (
              <p className="text-red-600 text-sm">
                {formErrors.graduationYear}
              </p>
            )}
          </div>
        </div>

        {/* Row 5 */}
        <div className="w-full">
          <CustomSelect
            className="w-full"
            label="PROGRAM SELECTION"
            options={["Bachelor's Programs", "Master's Programs"]}
            onChange={(val) => setFormData({ ...formData, program: val })}
            value={
              formData.program ||
              "Program You Are Applying For (Bachelors or Masters)"
            }
            error={formErrors.program}
          />
        </div>

        {/* Declaration */}
        <div className="space-y-4">
          <button
            type="submit"
            disabled={submitting}
            className="relative text-white font-bold px-5 py-1 w-60 bg-[#66A4F9] transition-all cursor-pointer group hover:shadow-inner border-dashed"
          >
            {submitting ? "Submitting..." : "Declaration & Submission"}
            <span className="absolute top-0 right-0 w-0 h-0 border-solid border-transparent group-hover:border-r-[15px] group-hover:border-b-[15px] transition-all duration-75 ease-out border-r-white border-b-[#3B76CB]"></span>
          </button>

          <div className="space-y-2">
            {["declaration1", "declaration2"].map((key, i) => (
              <label
                key={key}
                className="flex items-start gap-3 cursor-pointer"
              >
                <div className="relative w-5 h-5 border border-[#A9B8D5] bg-white">
                  <input
                    type="checkbox"
                    className="absolute opacity-0 w-10 h-5"
                    checked={formData[key]}
                    onChange={(e) =>
                      setFormData({ ...formData, [key]: e.target.checked })
                    }
                  />
                  {formData[key] && (
                    <>
                      <Image
                        alt="tick-icon"
                        src="/admissions/apply-now/tick-icon.svg"
                        width={20}
                        height={20}
                      />
                    </>
                  )}
                </div>
                <span className="text-xs">
                  {i === 0
                    ? "I confirm that all the information provided is accurate and complete"
                    : "I understand that my application will be reviewed based on the provided documents and criteria"}
                </span>
              </label>
            ))}
            {formErrors.declaration && (
              <p className="text-red-600 text-sm">{formErrors.declaration}</p>
            )}
          </div>
        </div>

        {/* Response Message */}
        {responseMsg && (
          <p className="text-sm text-gray-500">{responseMsg}</p>
        )}
        {/* Popup on submission */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
            >
              <motion.div
                ref={popupRef}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#0d2456] rounded-2xl p-8 max-w-4xl w-full mx-auto shadow-xl text-center"
              >
                {/* Close button */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-0 right-4 text-white hover:text-gray-800 text-4xl font-bold"
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="flex justify-center items-center">
                  <Image src="/Ayra-logo.png" width={100} height={100} />
                </div>
                {/* Thank You Message */}
                <h2 className="text-4xl pt-4 font-tthoves-demibold text-[#fff] mb-4">
                  Thank you for contacting us!
                </h2>
                <p className="text-[#66A4F9] text-md">
                  We’ve received your submission and will get back to you
                  shortly.
                </p>
                <p className="text-[#66A4F9] text-md">
                  Our team is reviewing your message with care.
                </p>
                <p className="text-[#66A4F9] text-md">
                  Expect a response within the next 24–48 hours.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
