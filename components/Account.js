import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import LoggedInAppFrame from './LoggedInAppFrame'

export default function Account({ session, user }) {
  const supabase = useSupabaseClient()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const [is_distributor, setIsDistributor] = useState(null)
  const [polygonId, setPolygonId] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`is_distributor, polygon_id_identifier`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setIsDistributor(data.is_distributor)
        setPolygonId(data.polygon_id_identifier)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ polygonId }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        polygon_id_identifier: polygonId,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <LoggedInAppFrame headerTitle="Account">
      <div className="form-widget">
        <div className="pt-5">
          <label className="text-white" htmlFor="email">Email</label>
          <input id="email" className="form-input" type="text" value={session.user.email} disabled />
        </div>

        <div className="pt-5">
          <label className="text-white" htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="form-input"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="pt-5">
          <label className="text-white" htmlFor="polygonId">Polygon ID</label>
          <input
            id="polygonId"
            type="polygonId"
            className="form-input"
            value={polygonId || ''}
            onChange={(e) => setPolygonId(e.target.value)}
          />
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="btn-tertiary"
              onClick={() => supabase.auth.signOut()}
            >
              Sign Out
            </button>

            <button
              type="button"
              className="ml-3 btn-primary"
              onClick={() => updateProfile({ polygonId })}
              disabled={loading}
            >
              {loading ? 'Loading ...' : 'Update'}
            </button>
          </div>
        </div>
      </div>
    </LoggedInAppFrame>
  )
}
