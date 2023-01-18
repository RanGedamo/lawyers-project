import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import { Lawyers } from '../../sidder';
  
  export default function LawyerPayment({lawyer}) {
    return (
      <Center py={6}>
        <Box
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'xl'}
          rounded={'md'}
          overflow={'hidden'} className="">
         
          <Flex justify={'center'} >
            <Avatar
            className='hover-zoom'
              size={'2xl'}
              src={
                lawyer?.imageString
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {lawyer?.firstName} {lawyer?.lastName}
              </Heading>
              <Text color={'gray.500'}>{lawyer?.title}</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontSize={'sm'} color={'gray.500'}>
                 {lawyer?.description}
                </Text>
              </Stack>
    
            </Stack>
          </Box>
        </Box>
      </Center>
    );
  }