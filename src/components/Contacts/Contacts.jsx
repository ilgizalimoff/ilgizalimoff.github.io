import React, { useEffect, useState } from 'react'
import classes from './Contacts.module.css'
import { iconArray } from '../../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import PostService from '../../API/PostService'

export default function Contacts() {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.getContactsReducer.contacts)

  useEffect(() => {
    dispatch(PostService.getContacts())
  }, [])

  return (
    <div className={classes.contacts}>
      <div className={classes.contacts_content}>
        {
          contacts.map((contact, index) =>
            <div key={contact.id} className={classes.contacts_content_item}>
              <p>{contact.value}</p>
              <a className={classes.contanct_icon} href={contact.href}>
                <img src={iconArray[index]} alt={contact.value} />
              </a>
            </div>
          )
        }
      </div>
    </div>
  )
}