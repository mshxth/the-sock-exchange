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
        }
    })

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(import.meta.env.VITE_SOCKS_API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...formData, addedTimestamp: new Date().toISOString()})
            })
        } catch (e) {
            console.log("error in api post: ", e);
        }
        
    };
    
    return (
        <form className="p-3">
        <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input
                type="text"
                className="form-control"
                id="userId"
                name="userId"
                value={formData.userId}
                onChange={(e) => setFormData({...formData, userId: e.target.value})}
            />
        </div>
        <div className="form-group">
            <label htmlFor="size">Size</label>
            <select
                className="form-control"
                id="size"
                name="size"
                value={formData.sockDetails.size}
                onChange={(e) => setFormData({...formData, sockDetails: {...formData.sockDetails, size: e.target.value}})}
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
                onChange={(e) => setFormData({...formData, sockDetails: {...formData.sockDetails, color: e.target.value}})}
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
                onChange={(e) => setFormData({...formData, sockDetails: {...formData.sockDetails, pattern: e.target.value}})}
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
                onChange={(e) => setFormData({...formData, sockDetails: {...formData.sockDetails, material: e.target.value}})}
            />
        </div>
        <div className="form-group">
            <label htmlFor="condition">Condition</label>
            <select
                className="form-control"
                id="condition"
                name="condition"
                value={formData.sockDetails.condition}
                onChange={(e) => setFormData({...formData, sockDetails: {...formData.sockDetails, condition: e.target.value}})}
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
                onChange={(e) => setFormData({...formData, sockDetails: {...formData.sockDetails, forFoot: e.target.value}})}
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
                    onChange={(e) => setFormData({...formData, additionalFeatures: {...formData.additionalFeatures, waterResistant: e.target.value}})}
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
                    onChange={(e) => setFormData({...formData, additionalFeatures: {...formData.additionalFeatures, padded: e.target.value}})}
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
                    onChange={(e) => setFormData({...formData, additionalFeatures: {...formData.additionalFeatures, antiBacterial: e.target.value}})}
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