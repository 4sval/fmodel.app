import React from "react";
import Documentation from "../Documentation";
import LearningCard from "../../components/LearningCard";
import Anchor from "../../components/Anchor";
import CodeSnippet from "../../components/CodeSnippet";
import Paginer from "../../components/Paginer";
import { Folders } from "../../utils/CreatedFolders";
import { ReactComponent as DirectorySelector } from '../../assets/svgs/docs/directory_selector.svg';

class GettingStarted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const configLocation =
            `#if DEBUG
        public static readonly string FilePath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "FModel", "AppSettings_Debug.json");
#else
        public static readonly string FilePath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "FModel", "AppSettings.json");
#endif`;

        return (
            <Documentation>
                <div className='border-b border-gray-200 pb-10'>
                    <h1 className='text-5xl font-black font-subtitle pb-2'>Getting Started</h1>
                    <h6 className='text-2xl font-light text-gray-600'>Learn how to use FModel the way that best matches your learning style.</h6>

                    <div className='mt-10 grid grid-cols-2 gap-8'>
                        <LearningCard gradient1='amber-400' gradient2='orange-500' title='Read The Docs' description='Learn how to get FModel setup for your needs.' href='#installation' />
                        <LearningCard gradient1='purple-400' gradient2='fuchsia-500' title='Watch Videos' description='Learn everything about FModel without having to read a 50-page long book.' href='https://www.youtube.com/results?search_query=fmodel' />
                    </div>
                </div>
                <div className='flex flex-col text-lg font-light text-gray-500 space-y-10'>
                    <div>
                        <Anchor id='installation' title='Installation' />
                        <p className='italic mb-4'>FModel requires you to have <strong>.NET 5.0 or later installed</strong>. If you don't already have it, you can <a className='underline' href='https://dotnet.microsoft.com/download/dotnet/5.0/runtime' target='_blank' rel='noreferrer'>download it here</a> and select the <strong>Windows Desktop x64</strong> version.</p>
                        <p>We provide a portable 64-bit Windows executable of FModel, it is super easy to install. In fact, you only have to <a className='font-bold underline text-blue-500' href='/download' target='_blank' rel='noreferrer'>download the compressed archive</a> containing the executable, uncompress that archive and launch the executable. FModel uses configuration files in order to save your settings, it is not recommended to launch the executable inside the compressed archive.</p>
                    </div>
                    <div>
                        <Anchor id='first-launch' title='First Launch' />
                        <p>Once you have installed FModel, the first thing it is going to do is, either get your configuration file back or if it doesn't exist yet, create one for you with default settings in it. This means that, if someday you want to <strong>reset your settings</strong>, you will need to delete the files inside the <code className='text-red-700'>`%appdata%/FModel`</code> folder. As shown below, if you are building the project from your IDE, it will use a different file, so a different configuration.</p>
                        <CodeSnippet code={configLocation} language='csharp' source='https://github.com/iAmAsval/FModel/blob/dev/FModel/Settings/UserSettings.cs#L19-L23' />

                        <p>FModel now has your configuration back, and it will verify if all required folders are still present in your configured <span className='italic'>Output Directory</span>. <strong>Don't delete any of these folders</strong> while FModel is running as they won't be re-created before the next launch and can cause errors in the meantime.</p>
                        <table className='table-fixed w-full border border-gray-200 mb-4'>
                            <thead>
                                <tr>
                                    <th className='w-1/5'></th>
                                    <th className='w-1/6'></th>
                                    <th className='w-full'></th>
                                </tr>
                            </thead>
                            <tbody className='text-base'>
                                {
                                    Folders.map((folder, index) => {
                                        return (
                                            <tr key={index} className={`bg-gray-${(index % 2 ? '100' : '50')}`}>
                                                <td className='font-bold font-subtitle'>{folder.name}</td>
                                                <td>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                                                    </svg>
                                                </td>
                                                <td>{folder.description}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <div className='w-1/2'>
                            <Anchor id='directory-selector' title='Directory Selector' />
                            <p className='break-words'>If everything goes well, you will be prompted to select a game. By default, FModel will try to auto-detect compatible installed games. If yours is not on the list, simply add it manually. Afterward, the Directory Selector will close itself and the main FModel window will open.</p>
                        </div>
                        <DirectorySelector className='w-1/2' />
                    </div>
                    <div>
                        <Anchor id='layout' title='Layout' />
                    </div>
                    <div>
                        <p>Now that you have a good overview of what FModel is made of, let's dive deeper and start learning the real things.</p>
                        <Paginer rightLabel='Game Loader' rightHref='/docs/game-loader' />
                    </div>
                </div>
            </Documentation>
        );
    }
}

export default GettingStarted;