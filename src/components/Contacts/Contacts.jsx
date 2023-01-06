import React, { useEffect, useState } from 'react'
import './Contacts.css'
import axios from 'axios'
import { contactUrl, iconArray } from '../../constants/constants'

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  async function getContacts() {
    await axios.get(contactUrl
    ).then((resp) => {
      setContacts(resp.data)
    })
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <div className='contacts'>
      <div className="contacts_content">
        {
          contacts.map((contact, index) =>
            <div key={contact.id} className="contacts_content-item">
              <p>{contact.value}</p>
              <a className='contanct_icon' href={contact.href}>
                <img src={iconArray[index]} alt={contact.value} />
              </a>
            </div>
          )
        }
      </div>
    </div>
  )
}