import React, { useState, useEffect } from "react";

function UserComponent({ name, initialAge, brithdate }) {
  const [age, setAge] = useState(initialAge);
  const brithdate = new Date(birthdate);
  const currentDate = new Date();

  const checkBirthday = () => {
    const currentYearbirthday = new Date(
      currentDate.getFullYear(),
      brithdate.getMonth(),
      brithdate.getDate()
    );
    console.log(`생일 축하합니다! ${name}님, 이제 ${age + 1}새입니다.`);
  };
}

useEffect(() => {
  checkBirthday();
}, []);
const incrementAge = () => {
  setAge(prevAge);
};
