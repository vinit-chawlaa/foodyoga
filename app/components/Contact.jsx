import { Mail, Phone } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  const contactInfo = [
    {
      name: "Dimi Trade s.r.o.",
      location: "Ostrava",
      country: "Czech Republic",
      email: "trade@dimitrade.com",
      contacts: [
        { name: "Dita Kollarova", phone: "+420-606340621" },
        { name: "Milan Zekucia", phone: "+421-949234554" }
      ],
      image: "/dimi.jpeg"
    },
    {
      name: "A. Birla International s.r.o.",
      location: "Prague",
      country: "Czech Republic",
      email: "info@abintl.cz",
      contacts: [
        { name: "Aneesha Birla", phone: "+420-770682232" }
      ],
      image: "/birla.jpeg"
    },
    {
      name: "Atlas Trading",
      location: "Capetown",
      country: "South Africa",
      email: "atc@atlastradingonline.com",
      contacts: [
        { name: "Hakeem Ahmed", phone: "+27-713337724" }
      ],
      image: "/atlas.jpeg"
    }
  ];

  return (
    <section id="contact" className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 py-4">Our Global Distribution Partners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((company, index) => (
            <div key={index} className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 shadow-md">
              <div className="h-48 w-50 relative cursor-pointer">
                <Image 
                  src={company.image} 
                  alt={company.name} 
                  fill
                  loading="eager"
                  className="object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                <p className="text-gray-600 mb-4">
                  {company.location}, {company.country}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Contact</h4>
                  
                  <div className="flex items-center gap-2">
                    <Mail className='text-blue-600'/>
                    <a href={`mailto:${company.email}`} className="text-blue-600 hover:underline">
                      {company.email}
                    </a>
                  </div>
                  
                  {company.contacts.map((contact, idx) => (
                    <div key={idx} className="mt-2">
                      <p className="font-medium">{contact.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className='text-green-600'/>
                        <a href={`tel:${contact.phone}`} className="text-green-600 hover:underline">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
