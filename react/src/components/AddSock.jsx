import React, { useState, useEffect } from "react";

const AddSock = () => {
    const [formData, setFormData] = useState({
        userId: '',
        sockDetails: {
            size: '',
            color: '',
            pattern: '',
            material: '',
            condition: '',
            forFoot: ''
        },
        additionalFeatures: {
            waterResistant: false,
            padded: false,
            antiBacterial: false
        },
        addedTimestamp: ''
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name in formData.sockDetails) {
            setFormData({
                ...formData,
                sockDetails: { ...formData.sockDetails, [name]: value },
            });
        } else if (name in formData.additionalFeatures) {
            setFormData({
                ...formData,
                additionalFeatures: {
                    ...formData.additionalFeatures,
                    [name]: type === "checkbox" ? checked : value,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const submission = {
                ...formData,
                addedTimestamp: new Date().toISOString(),
            };    
            const response = await fetch(import.meta.env.VITE_SOCKS_API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(submission)
            });

            if (!response.ok) {
                throw new Error();
            }
            const result = await response.json();
            console.log('Sock added successfully, ', result);
        } catch (e) {
            console.log("error in api post: ", e);
        }
        
    };
    
    return (
        <form  onSubmit={handleSubmit} className="p-3">
        <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input
                type="text"
                className="form-control"
                id="userId"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="size">Size</label>
            <select
                className="form-control"
                id="size"
                name="size"
                value={formData.sockDetails.size}
                onChange={handleChange}
            >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
                type="text"
                className="form-control"
                id="color"
                name="color"
                value={formData.sockDetails.color}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="pattern">Pattern</label>
            <input
                type="text"
                className="form-control"
                id="pattern"
                name="pattern"
                value={formData.sockDetails.pattern}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="material">Material</label>
            <input
                type="text"
                className="form-control"
                id="material"
                name="material"
                value={formData.sockDetails.material}
                onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="condition">Condition</label>
            <select
                className="form-control"
                id="condition"
                name="condition"
                value={formData.sockDetails.condition}
                onChange={handleChange}
            >
                <option>Used</option>
                <option>New</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="forFoot">For Foot</label>
            <select
                className="form-control"
                id="forFoot"
                name="forFoot"
                value={formData.sockDetails.forFoot}
                onChange={handleChange}
            >
                <option>Left</option>
                <option>Right</option>
                <option>Both</option>
            </select>
        </div>
        <div className="row">
            <div className="form-check col">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="waterResistant"
                    name="waterResistant"
                    checked={formData.additionalFeatures.waterResistant}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="waterResistant">
                    Water Resistant
                </label>
            </div>
            <div className="form-check col">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="padded"
                    name="padded"
                    checked={formData.additionalFeatures.padded}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="padded">
                    Padded
                </label>
            </div>
            <div className="form-check col">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="antiBacterial"
                    name="antiBacterial"
                    checked={formData.additionalFeatures.antiBacterial}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="antiBacterial">
                    Anti Bacterial
                </label>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
    </form>
    );
};

export default AddSock;