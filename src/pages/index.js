import AddJobListing from './components/AddJobListing'
import BlogPost from './components/BlogPost'
import { CompanyProfile } from './components/CompanyProfile'
import CreateTalkBox from './components/CreateTalkBox'
import Drivers from './components/Drivers'
import Login from './components/Login'
import NewsArchive from './components/NewsArchive'
import Reviews from './components/Reviews/Reviews'
import SignUp from './components/Sign Up'
import Jobs from './components/jobs'
import JobListing from './components/JobListing'
import AskQuestion from './components/AskQuestions'
import Navbar from './components/Navbar'
import Link from 'next/link'
import PersonalHome from './components/PersonalHome'
import { Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <div >
      <Stack position={'sticky'}>
        <Navbar/>
        <PersonalHome />
        <div>Home</div>
      </Stack>

        <footer>
          <Link href={"/components/Reviews/Reviews"}>
            See More
          </Link> 
        </footer>
    </div>
  )
}
