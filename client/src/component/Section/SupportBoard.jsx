import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  FormControl,
  Input,
  useColorModeValue,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { postDomain } from '../../services/emailHandler';


const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SupportBoard() {
  const [domain, setDomain] = useState()
  const [sendDomain, setSendDomain] = useState(false)
  const [statusDomain, setStatusDomain] = useState({
    error:false,
    success:false
  })
  

  const handlerDomain = (e) => {
    setDomain({...domain,[e.target.name]:e.target.value})
  }

  const submitDomain = async() => {
    
    await postDomain(domain).then(res=>console.log(res))
    .catch(err=>{
      console.log(err.response.data.message);
     if(err.response.data.message){
      return setStatusDomain({error:true,success:false});
     }
    
    })
    
    setStatusDomain({error:false,success:true})
  };

  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Dont be variable
          </Text>
          <Heading>let us check your website leagal wise</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            let us check your website legal wise
          </Text>
          <Stack
            spacing={4}>
            <FormControl id="domain">
              <Input
                required
                placeholder="Email"
                name="email"
                _placeholder={{ color: 'gray.500' }}
                type="email"
                onChange={(e) => handlerDomain(e)}
                className="mb-3"
              />
              <Input
                required
                placeholder="your-domainwebsite@example.com"
                _placeholder={{ color: 'gray.500' }}
                type="domain"
                name="domain"
                onChange={(e) => handlerDomain(e)}
                className="mb-3"
              />

              {statusDomain.success ?
              <Alert status='success' className='mb-3'>
              <AlertIcon />
              <AlertTitle>successfully sent!</AlertTitle>
              <AlertDescription>The web address was successfully sent.</AlertDescription>
            </Alert>:""}


              <Button
                onClick={() => submitDomain()}
                // disabled={sendDomain}
                display={statusDomain.success?'none':""}
                colorScheme={'green'}
                bg={'purple.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: '#BA55D3',
                }}>Send</Button>
            </FormControl>
            <Feature
              icon={
                <Icon as={CheckCircleIcon} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}