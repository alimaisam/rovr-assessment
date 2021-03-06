import config from '../config'
import { Ok, Err } from '../helper'

export default function Route (model) {
  // GET /search/repo/language
  // Description: Get github repositories by language
  async function getRepoByLanguage (req, res) {
    try {
      const result = await model.language(req.query, req.url)
      Ok(res)(result)
    } catch (error) {
      Err(res)(error)
    }
  }

  // GET /search/repo/topic
  // Description: Get github repositories by topic
  async function getRepoByTopic (req, res) {
    try {
      const result = await model.topic(req.query, req.url)
      Ok(res)(result)
    } catch (error) {
      Err(res)(error)
    }
  }

  async function getReportForAdminBySearches (req, res) {
      try {
          const result = await model.adminReport()
          Ok(res)(result)
      } catch (error) {
          Err(res) (error)
      }
  }

  return {
    getRepoByLanguage,
    getRepoByTopic,
    getReportForAdminBySearches
  }
}
