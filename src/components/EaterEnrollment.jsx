import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EventIcon from '@mui/icons-material/Event';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MapIcon from '@mui/icons-material/Map';
import SearchIcon from '@mui/icons-material/Search';
import { FeatureCard } from './FeatureCard';

export function EaterEnrollment() {
    return (
        <div className="bg-black m-[5%]">
            <div className="grid grid-cols-2">
                <div className="p-8">
                    <h2 className="text-white font-bold text-4xl">
                        Eater Enrollment
                    </h2>
                    <span className="text-neutral-400 font-semibold text-lg">
                        Search for courses and manage class schedules at UCI.
                    </span>
                    <div className="flex flex-col gap-4">
                        <FeatureCard title="Course Lookup" text="Search for courses across multiple quarters and view details such as availability and descriptions." img={<SearchIcon style={{ color: 'white' }}/>}/>
                        <FeatureCard title="Search Refinement" text="Filter by numerous criteria such as meeting times and availability." img={<FilterAltIcon style={{ color: 'white' }}/>}/>
                        <FeatureCard title="Multiple Schedules" text="Create and manage multiple schedules for different quarters." img={<DynamicFeedIcon style={{ color: 'white' }}/>}/>
                        <FeatureCard title="Visual Interface" text="An intuitive calendar interface that supports both added courses and user-created events." img={<EventIcon style={{ color: 'white' }}/>}/>
                        <FeatureCard title="Built-in Map" text="An integrated map to see where classes are and on which days." img={<MapIcon style={{ color: 'white' }}/>}/>
                    </div>
                </div>
                <div className="border border-neutral-500 bg-neutral-900 rounded-xl p-4 h-fit">
                    <img src={require('../assets/eaterenrollment.png')} alt="Eater Enrollment screenshot"/>
                </div>
            </div>
        </div>
    )
}