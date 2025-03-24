"use client";

import React, { useState, useRef } from "react";
import FormInput from "../ReUsables/FormInput";
import FormSelector from "../ReUsables/FormSelector";
import { PartnerFormFields } from "@/utils";
import styles from "../../styles/AttendPage/attendform.module.scss";

const PartnersForm = () => {
  const [buttonText, setButtonText] = useState("Apply to partner");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBox, setActiveBox] = useState(false);
  const [tickError, setTickError] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const firstSeven = PartnerFormFields.slice(0, 7); // Gets the first 6 items
  const textArea = PartnerFormFields[7];

  const toggleCheckbox = () => {
    const newActiveBox = !activeBox;
    setActiveBox(newActiveBox);

    // If the user ticks the box, remove any error
    if (newActiveBox) {
      setTickError(false);
    }
  };

  //FormSelect
  const [selectedItem, setSelectedItem] = useState("Please select");
  const selections = ["Please select", "Sponsorship", "Partnership"];
  const [selectError, setSelectError] = useState(false);

  const toggleSelectedItem = (selection: string) => {
    const newSelection = selection;
    setSelectedItem(newSelection);

    // If the user ticks the box, remove any error
    if (newSelection !== "Please select") {
      setSelectError(false);

      // Update button text based on inquiry:
      // If "Sponsorship" is selected, change to "Apply to sponsor"
      // If "Partnership" is selected, change to "Apply to partner"
      if (newSelection.toLowerCase().includes("sponsorship")) {
        setButtonText("Apply to sponsor");
      } else if (newSelection.toLowerCase().includes("partnership")) {
        setButtonText("Apply to partner");
      } else {
        // fallback (if needed)
        setButtonText(`Apply to partner`);
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // If selectBox is not selected, show error and stop submission
    if (selectedItem === "Please select") {
      setSelectError(true);
      return;
    }
    setSelectError(false);

    // If checkbox is not ticked, show error and stop submission
    if (!activeBox) {
      setTickError(true);
      return;
    }
    setTickError(false);

    //Form Data
    const formData = new FormData(event.currentTarget);

    // Retrieve form fields
    const firstname = formData.get("firstname") as string | null;
    const lastname = formData.get("lastname") as string | null;
    const jobtitle = formData.get("jobtitle") as string | null;
    const companyname = formData.get("coname") as string | null;
    const companyemail = formData.get("coemail") as string | null;
    const companycountry = formData.get("country") as string | null;
    const industrydesc = formData.get("indesc") as string | null;
    const inquiry = selectedItem as string | null;
    const additionalinfo = formData.get("addinfo") as string | null;

    // Change button text and show "Submitting..."
    // Change button text for submission based on the inquiry
    if (selectedItem.toLowerCase().includes("sponsorship")) {
      setButtonText("Applying to sponsor...");
    } else if (selectedItem.toLowerCase().includes("partnership")) {
      setButtonText("Applying to partner...");
    } else {
      setButtonText("Applying to partner...");
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/speakers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          jobtitle,
          companyname,
          companyemail,
          companycountry,
          industrydesc,
          inquiry,
          additionalinfo,
        }),
      });

      if (response.ok) {
        // On success, update button text
        setButtonText("Thankyou! We'll get back to you shortly.");

        // Reset form after a successful submission
        if (formRef.current) {
          formRef.current.reset();
        }
        setActiveBox(false);
      } else {
        // If API response is not ok, show error
        setButtonText("Sorry, an error occurred");
      }
    } catch (error) {
      console.error("Error during form submission", error);
      setButtonText("Sorry, an error occurred");
      setIsSubmitting(false);
    } finally {
      // After 3 seconds, reset the button text to "Submit form"
      setIsSubmitting(false); // Enable the button again

      setTimeout(() => {
        setButtonText("Apply to speak");
      }, 5000);
    }
  };

  return (
    <div className={styles.aform__wrapper}>
      <form onSubmit={handleSubmit} ref={formRef} className={styles.form}>
        <div className={styles.form__top}>
          <div className={styles.form__boxing}>
            <div className={styles.form__forms}>
              {firstSeven.map((data, i) => (
                <FormInput
                  data={data}
                  key={`fs${i}`}
                  isSubmitting={isSubmitting}
                />
              ))}
              <FormSelector
                selections={selections}
                selectedItem={selectedItem}
                labeler="What is your Inquiry?*"
                errorMessage="Please select an inquiry"
                selectError={selectError}
                toggleSelectedItem={toggleSelectedItem}
              />
            </div>
            <FormInput
              data={textArea}
              key="text-area"
              isSubmitting={isSubmitting}
            />
          </div>
          <div className={styles.checkbox__wrapper}>
            <div className={styles.cw__top}>
              <div
                className={`${styles.checkbox} ${
                  activeBox ? styles.active__box : ""
                }`}
                onClick={toggleCheckbox}
              >
                <div className={styles.checkbox__content}>
                  <span className={styles.svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        fill="#fff"
                        d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <span className={styles.checkbox__text}>
                To keep you informed about the latest updates on ILID 2025,
                please agree to receive information about our events by ticking
                this box.
              </span>
            </div>
            {tickError && (
              <span className={styles.checkbox__error}>
                Please check this box to receive event updates.
              </span>
            )}
          </div>
        </div>
        <button
          className={styles.submit}
          type="submit"
          disabled={isSubmitting} // Disable button while submitting
        >
          <span>{buttonText}</span>
          {isSubmitting && (
            <div className={styles.sub__right}>
              <span className={styles.spinner}></span>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default PartnersForm;
