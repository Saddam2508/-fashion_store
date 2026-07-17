"use client";

import { ProductContext } from "@/context/ProductContext";
import {
  Button,
  Description,
  FieldError,
  Form,
  SearchField,
  Spinner,
} from "@heroui/react";
import { useContext, useState, FormEvent } from "react";

export const Search = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useproduct must be used within ProductProvider");
  }
  const { setSearchTerm } = context;

  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MIN_LENGTH = 3;
  const isInvalid = value.length > 0 && value.length < MIN_LENGTH;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (value.length < MIN_LENGTH) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setSearchTerm(value);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      <Form className="flex justify-center" onSubmit={handleSubmit}>
        <SearchField
          isRequired
          isInvalid={isInvalid}
          name="search"
          value={value}
          onChange={(val) => {
            setValue(val);
            if (val.length === 0) {
              setSearchTerm("");
            }
          }}
        >
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input
              className="w-full"
              placeholder="Search products..."
            />
            <SearchField.ClearButton />
          </SearchField.Group>
          {isInvalid ? (
            <FieldError>
              Search query must be at least {MIN_LENGTH} characters
            </FieldError>
          ) : (
            <Description>
              Enter at least {MIN_LENGTH} characters to search
            </Description>
          )}
        </SearchField>
        <Button
          className="cursor-pointer"
          isDisabled={value.length < MIN_LENGTH}
          isPending={isSubmitting}
          type="submit"
          variant="primary"
        >
          {isSubmitting ? (
            <>
              <Spinner color="current" size="sm" />
              Searching...
            </>
          ) : (
            "Search"
          )}
        </Button>
      </Form>
    </div>
  );
};
