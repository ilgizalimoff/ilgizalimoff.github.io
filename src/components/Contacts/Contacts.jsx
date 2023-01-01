import React, { useEffect, useState } from 'react'
import './Contacts.css'
import axios from 'axios'
import whatsappLogo from './icons/whatsapp.svg'
import instLogo from './icons/instagram.svg'
import vkLogo from './icons/vk.svg'
import telLogo from './icons/telegram.svg'
import gitLogo from './icons/github.svg'

export default function Contacts() {
  const url = 'https://my-json-server.typicode.com/ilgizalimoff/server/contacts'
  const iconArray = [whatsappLogo, instLogo, vkLogo, telLogo, gitLogo]
  
  const [contacts, setContacts] = useState([]);

  async function getContacts() {
    await axios.get(url).then((resp) => {
      setContacts(resp.data)
    })
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <div className='Contacts'>
      <div className="Contacts_content">
        {
          contacts.map((contact, index) =>
            <div key={contact.id} className="Contacts_content-item">
              <p>{contact.value}</p>
              <a className='contanctIcon' href={contact.href}>
                <img src={iconArray[index]} alt={contact.value} />
              </a>
            </div>
          )
        }
      </div>
    </div>
  )
}