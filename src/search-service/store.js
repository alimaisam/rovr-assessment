/*
 * src/food-service/store.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 28/12/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

export default function Store () {
    async function language (keyword, page = 1, per_page = 10) {
      //const [rows] = await db.query('SELECT * FROM food WHERE id = ?', [id])
      //return (rows && rows[0]) || null
    }
  
    async function topic (keyword, page = 1, per_page = 10 ) {
      //const [rows] = await db.query('SELECT * from food')
      //return rows
    }
  
    return {
      language,
      topic
    }
  }
  