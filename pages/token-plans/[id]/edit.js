import { useRouter } from 'next/router';
import { useState } from 'react';
import TokenPlanForm from '../../../components/token-plans/token-plan-form';
import { supabase } from '../../../supabase-client';
import { useSession } from '@supabase/auth-helpers-react'
import { Row, Col } from 'reactstrap'

export default function EditTokenPlan({ tokenPlan }) {
  const [name, setName] = useState(tokenPlan.name)
  const [description, setDescription] = useState(tokenPlan.description)
  const [tokenName, setTokenName] = useState(tokenPlan.token_name)
  const router = useRouter()
  const session = useSession()

  return (
    <>
      <h1>Edit Token Plan</h1>
      <Row>
        <TokenPlanForm
          name={name}
          onNameChange={(evt) => setName(evt.target.value)}
          description={description}
          onDescriptionChange={(evt) => setDescription(evt.target.value)}
          tokenName={tokenName}
          onTokenNameChange={(evt) => setTokenName(evt.target.value)}
          onSubmit={async (evt) => {
            evt.preventDefault();
            const { data, error } = await supabase
              .from('token_plans')
              .update({
                name: name,
                description: description,
                token_name: tokenName,
              })
              .match({
                id: tokenPlan.id,
              });

            router.push('/token-plans')
          }}
        />
      </Row>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { data: tokenPlan, error } = await supabase
    .from('token_plans')
    .select('*')
    .eq('id', context.query.id)
    .single()

  if (error) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      tokenPlan
    }
  }
}
