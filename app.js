const express = require('express');
const app = express();
const parser = require("body-parser");

app.use(parser.urlencoded({extended : true}));

app.listen(3000);

// pet info

var pets = [{ "images": [
        "https://images.craigslist.org/00Y0Y_90uGjaO2P7b_600x450.jpg",
        "https://images.craigslist.org/00B0B_vDeSMdbJ0v_600x450.jpg"
    ],
    "age": "8 months",
    "species": [
        "dog", "puppy"
    ],
    "gender": "male",
    "price": "Free",
    "location": "8 km"
  },
  {
    "images": [
        "https://images.craigslist.org/00Y0Y_90uGjaO2P7b_600x450.jpg"
    ],
    "age": "3 months",
    "species": [
        "dog", "puppy"
    ],
    "gender": "male",
    "price": "$200",
    "location": "2 km"
  },
  {
    "images": [
        "https://images.craigslist.org/00n0n_9IsCpCq82C8_600x450.jpg"
    ],
    "age": "8 months",
    "species": [
        "bunny", "rabbit"
    ],
    "gender": "female",
    "price": "$200",
    "location": "5 km"
  },
  {
    "images": [
        "https://images.craigslist.org/00C0C_kq2dkHswewh_600x450.jpg"
    ],
    "age": "3 months",
    "species": [
        "cat", "kitten"
    ],
    "gender": "female",
    "price": "$550",
    "location": "4 km"
  },
  {
    "images": [
        "https://images.craigslist.org/01010_ivlyqufYYCD_600x450.jpg"
    ],
    "age": "N/A",
    "species": [
        "bird", "parrot"
    ],
    "gender": "female",
    "price": "N/A",
    "location": "4 km"
  },
  {
    "images": [
        "https://images.craigslist.org/00i0i_8FzEjNUOuHP_600x450.jpg",
        "https://images.craigslist.org/00T0T_cghpOZxHWDX_600x450.jpg",
        "https://images.craigslist.org/00M0M_8XRdxMQQjBp_600x450.jpg"
    ],
    "age": "1 year",
    "species": [
        "python", "snake"
    ],
    "gender": "male",
    "price": "$150",
    "location": "10 km"
  },
  {
    "images": [
        "https://images.craigslist.org/00o0o_jbJK3wydM4n_600x450.jpg",
        "https://images.craigslist.org/00404_hW8OkgeeybX_600x450.jpg",
        "https://images.craigslist.org/00L0L_diq4GEaZFZw_600x450.jpg"
    ],
    "age": "1 year",
    "species": [
        "kitten", "cat"
    ],
    "gender": "male",
    "price": "Free",
    "location": "2 km"
  },
  {
    "images": [
        "https://images.craigslist.org/00C0C_9WqcSEjahg5_600x450.jpg"
    ],
    "age": "8 weeks",
    "species": [
        "puppy", "dog"
    ],
    "gender": "male",
    "price": "$250",
    "location": "1 km"
  },
  {
    "images": [
        "https://images.craigslist.org/00E0E_dtsPqYtub3p_600x450.jpg"
    ],
    "age": "2 years",
    "species": [
        "dog"
    ],
    "gender": "male",
    "price": "N/A",
    "location": "10 km"
  },
  {
    "images": [
        "https://images.craigslist.org/00E0E_5Aef9zW5sHs_600x450.jpg"
    ],
    "age": "2 years",
    "species": [
        "dog"
    ],
    "gender": "female",
    "price": "N/A",
    "location": "4 km"
  },
    {
      "images": [
        "https://media.petango.com/sms/photos/1686/7a28c5e7-e0fa-4e67-bdb6-a0314bc80b7b.jpg",
        "https://media.petango.com/sms/photos/1686/5886cc38-88c9-4731-bdca-10fe40fb1a27.jpg"
      ],
      "age": "7 Years 7 months",
      "species": [
        "Cat"
      ],
      "gender": "male",
      "location": "5 km",
      "price": "60"
    },
    {
      "images": [
        "https://media.petango.com/sms/photos/1686/4638e8e6-5fbb-43ae-9d22-cb95a9c6b7e2.jpg",
        "https://media.petango.com/sms/photos/1686/a914ebb2-1bad-4956-978a-2f7be475b505.jpg",
        "https://media.petango.com/sms/photos/1686/edfe251e-41c9-4ce8-ae56-e39331595be9.jpg"
      ],
      "age": "2 Years 8 months",
      "species": [
        "Cat"
      ],
      "gender": "Male",
      "location": "3 km"
    },
    {
      "images": [
        "https://adopt.hssvmil.org/photos//lostfound/103452.jpg",
        "https://adopt.hssvmil.org/photos//lostfound/a392b93f-e099-426e-990b-2591ce863053.jpg",
        "https://adopt.hssvmil.org/photos//lostfound/192b3f98-e535-448e-b51e-b4069681028d.jpg"
      ],
      "age": "5 months",
      "species": [
        "Cat"
      ],
      "gender": "Female",
      "location": "10 km"
    },
    {
      "images": [
        "https://adopt.hssvmil.org/photos/lostfound/105073_th_600.jpg",
        "https://adopt.hssvmil.org/photos//lostfound/55343ae3-a6a4-432c-9f82-15f8ada6af73.jpg",
        "https://adopt.hssvmil.org/photos//lostfound/3c499677-14be-4144-943b-7d2a34e3ea49.jpg"
      ],
      "age": "3 months",
      "species": [
        "Cat"
      ],
      "gender": "Male",
      "location": "15 km"
    },
    {
      "images": [
        "https://adopt.hssvmil.org/photos//lostfound/105118.jpg"
      ],
      "age": "3 months",
      "species": [
        "Cat"
      ],
      "gender": "Male",
      "location": "15 km"
    },
    {
      "images": [
        "https://adopt.hssvmil.org/photos/lostfound/105119_th_600.jpeg"
      ],
      "age": "3 months",
      "species": [
        "Cat"
      ],
      "gender": "Female",
      "location": "20 km"
    },
    {
      "images": [
        "https://adopt.hssvmil.org/photos//lostfound/105255.jpg",
        "https://adopt.hssvmil.org/photos//lostfound/f0ea50f1-ba3a-42c5-b158-b71325c5a6e3.jpg"
      ],
      "age": "3 months",
      "species": [
        "Cat"
      ],
      "gender": "Male",
      "location": "20 km"
    },
    {
      "images": [
        "https://adopt.hssvmil.org/photos//lostfound/105384.jpg",
        "https://adopt.hssvmil.org/photos//lostfound/a7e0f451-3144-4fb4-937b-0fbbca722ed1.jpg"
      ],
      "age": "3 months",
      "species": [
        "Cat"
      ],
      "gender": "Female",
      "location": "25 km"
    },
    {
      "images": [
        "https://adopt.hssvmil.org/photos/lostfound/105646_th_600.jpg"
      ],
      "age": "11 weeks",
      "species": [
        "Cat"
      ],
      "gender": "Female",
      "location": "25 km"
    },
    {
      "images": [
        "https://adopt.hssvmil.org/photos/lostfound/106702_th_600.jpg",
        "https://adopt.hssvmil.org/photos//lostfound/64623390-7582-4006-a0b8-e78e16ae31d7.jpg"
      ],
      "age": "3 months",
      "species": [
        "Cat"
      ],
      "gender": "Male",
      "location": "5 km"
    },
    {
      "images": [
        "https://adopt.hssvmil.org/photos/lostfound/106703_th_600.jpg"
      ],
      "age": "3 months",
      "species": [
        "Cat"
      ],
      "gender": "Male",
      "location": "6 km"
    },
    {
      "images": [
        "https://adopt.hssvmil.org/photos/lostfound/106950_th_600.jpg"
      ],
      "age": "3 months",
      "species": [
        "Cat"
      ],
      "gender": "Male",
      "location": "6 km"
    },
    {
      "images": [
        "https://adopt.hssvmil.org/photos/lostfound/106999_th_600.jpg",
        "https://adopt.hssvmil.org/photos//lostfound/255749e4-c9dd-4806-b74e-c5d82d6e54fc.jpg"
      ],
      "age": "5 months",
      "species": [
        "Cat"
      ],
      "gender": "Male",
      "location": "10 km"
    }
  
]

var pet_count = 0;

app.get('/get-pet', function (req, res) {
    res.json(pets[pet_count]);
    pet_count = (pet_count + 1) % pets.length;
})


app.get('/match', function (req, res) {
    if (pet_count > 3) {
        res.json({
            match: pet_count,
            did_match: true
        });        
    } else {
        res.json({
            match: pet_count,
            did_match: false
        }); 
    }
})

// messages

var messages = [
    "Hey, nice to meet you!",
    "My pet's name is Champ.",
    "I have to give him away because I recently gave birth to two newborns. They take way too much time",
    "I wish I could use this service to put my kids up for adoption, haha.",
    "Let me know if you wanna take him. I had him when I was a small boy",
    "My pa raised him and I like brothers",
    "i gtg lmk plz"
]

var message_count = 0;

app.get('/get-msg', function (req, res) {
    res.json({
        message: messages[message_count]
    });
    message_count = (message_count + 1) % messages.length;       
})

module.exports = app;
