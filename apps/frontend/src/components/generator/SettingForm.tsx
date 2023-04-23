import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code } from '@mantine/core';
// @ts-ignore
import { useForm } from '@mantine/form';
import Link from 'next/link';

type SettingFormProps = {
  onClick: any
}

export function SettingForm({onClick}: SettingFormProps) {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      name: '',
      email: '',
      website: '',
      github: '',
    },

    validate: (values: any) => {
      if (active === 0) {
        return {
          username:
            values.username.trim().length < 6
              ? 'Username must include at least 6 characters'
              : null,
          password:
            values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        };
      }      
      return {};
    },
  });


  return (
    <>
          <TextInput label="Username" placeholder="Username" {...form.getInputProps('username')} />
          <PasswordInput
            mt="md"
            label="Password"
            placeholder="Password"
            {...form.getInputProps('password')}
          />

         <Button style={{marginTop: 24}} variant="default" onClick={onClick}>
                Generate Avatar
        </Button>
    </>
  );
}
