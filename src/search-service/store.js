export default function Store () {
    async function language (keyword, page = 1, per_page = 10) {
        if (!keyword)
            return null;
        console.log(keyword);
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
  