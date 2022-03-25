import styled from "styled-components";
import React from "react";

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 20px auto;
`;

const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 20px auto;
    & > input {
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
    }
    & > button {
        padding: 10px;
        font-size: 14px;
        color: #fff;
        background-color: #4CAF50;
        border: none;
        outline: none;
        font-weight: bold;
        cursor: pointer;
    }
`;

const CityComponents = (props) => {
    const {updateCity, fetchWeather} = props;
    return (
        <>
        <WeatherLogo src="/icons/perfect-day.svg" alt="openweathermap" />
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input 
                type="text"
                placeholder="Enter city name" 
                onChange={(e) => updateCity(e.target.value)}
            />
            <button type="submit">Search</button>
        </SearchBox>
        </>
    );
};

export default CityComponents;