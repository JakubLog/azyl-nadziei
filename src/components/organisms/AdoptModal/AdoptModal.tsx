import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledButton, Information, StyledLoadingIcon, LoadingWrapper } from './AdoptModal.styles';
import { useForm } from 'react-hook-form';
import FormField from 'components/molecules/FormField/FormField';
import { useError } from 'hooks/useError';
import axios from 'axios';
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';

interface props {
  animalName: string;
}

const states = {
  empty: 'empty',
  loading: 'loading',
  success: 'success',
  error: 'error'
};

const machine = createMachine({
  id: 'Adoption',
  initial: states.empty,
  states: {
    [states.empty]: {
      on: {
        POSTING_FORM: states.loading
      }
    },
    [states.loading]: {
      on: {
        POSTING_SUCCESS: states.success,
        POSTING_ERROR: states.error
      }
    },
    [states.error]: {
      on: {
        POSTING_FORM: states.loading
      }
    },
    [states.success]: {
      type: 'final'
    }
  }
});

const AdoptModal: React.FC<props> = ({ animalName }) => {
  const [currentState, send] = useMachine(machine);
  const { dispatchError } = useError();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const process = async ({ name, email }: { name: string; email: string }) => {
    if (currentState.matches(states.empty) || currentState.matches(states.error)) {
      try {
        send('POSTING_FORM');
        const res = await axios.post('https://hook.integromat.com/8b4ouhk4tsr37ngfsp4addpzw5mywgh4', { name, contact: email, animalName });
        if (res.status !== 200) {
          send('POSTING_ERROR');
          throw new Error(res.statusText);
        } else send('POSTING_SUCCESS');
      } catch (e) {
        dispatchError('Something went wrong with adoption! Please try again and contact with us!');
      }
    }
  };

  return (
    <>
      <Information>
        <div>
          Wypełniając poniższy formularz wyrażasz chęć adopcji pupila <b>{animalName}</b>.
        </div>
      </Information>
      <Wrapper>
        <form onSubmit={handleSubmit(process)}>
          <FormField label="imię" placeholder="Podaj swoje imię" {...register('name', { required: true })} />
          <FormField label="email" type="email" placeholder="example@gmail.com" {...register('email', { required: true })} />
          <StyledButton type="submit" state={currentState.value}>
            {currentState.matches(states.empty) ? (
              'Poproś o kontakt'
            ) : currentState.matches(states.loading) ? (
              <LoadingWrapper>
                Wysyłanie... <StyledLoadingIcon />
              </LoadingWrapper>
            ) : currentState.matches(states.success) ? (
              'Wysłano pomyślnie!'
            ) : (
              'Spróbuj ponownie...'
            )}
          </StyledButton>
        </form>
      </Wrapper>
    </>
  );
};

AdoptModal.propTypes = {
  animalName: PropTypes.string.isRequired
};

export default AdoptModal;
