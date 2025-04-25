import { BotIcon, BrainIcon, ChartBarIcon, ImageIcon, LinkIcon, MicIcon, NotebookIcon, PaperclipIcon,  } from 'lucide-react';
import AgentPulse from './components/AgentPulse';
import YoutubeVideoForm from './components/YoutubeVideoForm';

const features = [
  {
    title: "AI Analysis",
    description: "Get detailed analysis of your video content with AI-powered insights. Understand viewer engagement, sentiment and more.",
    icon: BrainIcon,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500'
  },

  {
    title: 'Smart Transcription',
    description: 'Get accurate transcriptions of your video content in seconds. Edit, share and download your transcripts with ease.',
    icon: MicIcon,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-500'
  },
  {
    title: "Thumbnail Generator",
    description: "Create stunning video thumbnails in seconds. Choose from a range of templates and customise to your liking.",
    icon: ImageIcon,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-500'
  },
  {
    title: "Title Generation",
    description: "Generate catchy video titles with AI-powered suggestions. Improve your video SEO and attract more viewers.",
    icon: NotebookIcon,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-500'
  }, 
  {
    title: "Shot script",
    description: "Generate a shot script of your video content with AI-powered analysis. Understand the structure of your video and improve engagement.",
    icon: PaperclipIcon,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500'
  }, 
  {
    title: "Discuss with your AI Agent",
    description: "Discuss your video content with your AI Agent. Get suggestions, insights and improve your content.",
    icon: BotIcon,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-500'
  }
  

]


const steps = [
  {
    title: "1. Connect Your Content",
    description: "Share your YouTube video URL and let your AI Agent do the rest.",
    icon: LinkIcon,
  }, 

  {
    title: "2. AI Agent Analysis",
    description: "Get detailed analysis of your video content with AI-powered insights.",
    icon: ChartBarIcon,
  },

  {
    title: "3. Receive Intelligence",
    description: "Understand viewer engagement, sentiment and more with AI-powered insights.",
    icon: BrainIcon,
  }
]

export default function Home() {
  return (
<div className="min-h-screen ">
  {/* Hero section */}

    <section className="py-20 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col items-center gap-10 text-center mb-12">
         <AgentPulse size="large" color="blue" />
         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 ">Meet Your Personal
         <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> AI Content Agent</span>
         </h1>
         
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-white">
            Transform your video content with AI-powered analysis, transcripts and insights. Get Started in seconds
          </p>
        </div>
      </div>
      {/* Youtube video form */}
      <YoutubeVideoForm />
    </section>

  {/* Feature section */}
  <section className="py-20 bg-white dark:bg-gray-900  dark:text-white">
    <div className="container mx-auto px- max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Content Creators</h2>
    
 
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4'>
      {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-a duration-300" key={index}>
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${feature.iconBg} ${feature.iconColor}`}>
                <span className="w-6 h-6">
                  {typeof Icon === 'string' ? Icon : <Icon />}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="dark:text-white text-gray-600 ">{feature.description}</p>
              </div>
            </div>
          )
      })}
        
    </div>
    {/* Features */}
    </div>
  </section>
  {/* How it works section */}

  <section className = "py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-3xl font-bold text-center mb-12">Meet your AI Agent in 3 simple steps</h2>
        
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all" key={index}>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="w-8 h-8"><Icon /></span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className= "text-gray-600 dark:text-white">{step.description}</p>
                </div>
              )
            })}
          </div>
        
    </div>
  </section>
           
    

  {/* Footer section */}
  <section className='py-20 px-4 md:px-0 bg-gradient-to-r from-blue-600 to-blue-400'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold text-white dark:text-white mb-6'>Brace up and join the era of AI Agents that work for you. </h2>
              <p className='text-xl text-blue-50'> Be like Jim and maximize your content in a timespan of 1 video creation</p>
            </div>
  </section>
</div>
  );
}
