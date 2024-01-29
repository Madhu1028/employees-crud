import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    let navigate = useNavigate();
    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState(0);
    const [phone, setPhone] = useState(0);
    const [ecode, setEcode] = useState(0);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('Email'));
        setSalary(localStorage.getItem('Salary'));
        setPhone(localStorage.getItem('Phone'));
        setEcode(localStorage.getItem('Ecode'));

    }, []);

    const updateAPIData = () => {
        axios.post(`http://localhost:5001/api/edit_user/${id}`, {
            name,
            email,
            salary,
            phone,
            ecode
        }).then(() => {
            navigate('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Employee Name</label>
                    <input placeholder='Name' type="text" onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input type="Email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Salary</label>
                    <input placeholder='Salary' type="number" onChange={(e) => setSalary(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input placeholder='Phone' type="number" onChange={(e) => setPhone(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Employee code</label>
                    <input placeholder='Ecode' type="number" onChange={(e) => setEcode(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
