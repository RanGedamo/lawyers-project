import react, { useState, useEffect } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';


export default function Category() {
    const [categories,setCategories] = useState([])
useEffect(() => {setCategories(CategoryArr)}, [])

  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage=""
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                    kojo
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                ...
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}


const stats = [
  {
    title: "sub 1",
    img: "https://img.freepik.com/free-vector/attorney-company-legal-consulting-support-notary-clients_335657-3143.jpg?w=1060&t=st=1673192438~exp=1673193038~hmac=f9023aa438c887b58439cfb4e069627b76bb3976e763f64eec63b28ae2277daf",
    content: (
      <>
        for detailed monitoring and
        real-time analytics
      </>
    ),
  },
  {
    title: "sub 2",
    img: "https://img.freepik.com/free-vector/attorney-company-legal-consulting-support-notary-clients_335657-3143.jpg?w=1060&t=st=1673192438~exp=1673193038~hmac=f9023aa438c887b58439cfb4e069627b76bb3976e763f64eec63b28ae2277daf",
    content: (
      <>
        enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: "sub 3",
    img: "https://img.freepik.com/free-vector/attorney-company-legal-consulting-support-notary-clients_335657-3143.jpg?w=1060&t=st=1673192438~exp=1673193038~hmac=f9023aa438c887b58439cfb4e069627b76bb3976e763f64eec63b28ae2277daf",
    content: (
      <>
        in North America has chosen NewLife™ as
        their management solution
      </>
    ),
  },
  {
    title: "sub 4",
    img: "https://img.freepik.com/free-vector/attorney-company-legal-consulting-support-notary-clients_335657-3143.jpg?w=1060&t=st=1673192438~exp=1673193038~hmac=f9023aa438c887b58439cfb4e069627b76bb3976e763f64eec63b28ae2277daf",
    content: (
      <>
        currently connected and monitored by the
        NewLife™ software
      </>
    ),
  },
];