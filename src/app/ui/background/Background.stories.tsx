import type { Meta, StoryObj } from '@storybook/react';
import Background from './Background';

const meta: Meta<typeof Background> = {
    title: 'UI/Background',
    component: Background,
    parameters: {
        layout: 'fullscreen',
               viewport: {
            viewports: {
                mobile: {
                    name: 'Mobile',
                    styles: {
                        width: '375px',
                        height: '667px',
                    },
                },
                tablet: {
                    name: 'Tablet',
                    styles: {
                        width: '768px',
                        height: '1024px',
                    },
                },
                desktop: {
                    name: 'Desktop',
                    styles: {
                        width: '1920px',
                        height: '1080px',
                    },
                },
            },
            defaultViewport: 'desktop',
        },
        docs: {
            description: {
                component: 'Component hiển thị ảnh background với z-index thấp, chiếm toàn bộ màn hình.',
            },
        },
    },
    argTypes: {
        src: {
            control: 'text',
            description: 'Đường dẫn đến ảnh background',
        },
        alt: {
            control: 'text',
            description: 'Text mô tả cho ảnh',
        },
        priority: {
            control: 'boolean',
            description: 'Ưu tiên load ảnh',
        },
        className: {
            control: 'text',
            description: 'CSS classes bổ sung',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story mặc định với ảnh sample
export const Default: Story = {
    args: {
        src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: 'Wedding background',
    },
    decorators: [
        (Story) => (
            <div style={{ position: 'relative', height: '100vh' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-5" />
                <div className="relative z-10 flex items-end justify-center h-full pb-20">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Gradient Overlay</h1>
                        <p className="text-xl">Background với gradient overlay</p>
                    </div>

                </div>
                <Story />
            </div>
        ),
    ],
};

// Story với ảnh thiên nhiên
export const Nature: Story = {
    args: {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: 'Nature background',
        priority: true,
    },
    decorators: [
        (Story) => (
            <div style={{ position: 'relative', height: '100vh' }}>
                <Story />
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="bg-black/50 text-white p-8 rounded-lg">
                        <h1 className="text-4xl font-bold">Beautiful Nature</h1>
                        <p className="text-lg mt-2">Ảnh thiên nhiên làm background</p>
                    </div>
                </div>
            </div>
        ),
    ],
};

// Story với opacity thấp
export const WithOpacity: Story = {
    args: {
        src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: 'Subtle background',
        className: 'opacity-30',
    },
    decorators: [
        (Story) => (
            <div style={{ position: 'relative', height: '100vh' }}>
                <Story />
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">Subtle Background</h1>
                        <p className="text-xl text-gray-700">Background với opacity thấp để làm nổi bật nội dung</p>
                    </div>
                </div>
            </div>
        ),
    ],
};

// Story với blur effect
export const WithBlur: Story = {
    args: {
        src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: 'Blurred background',
        className: 'blur-sm',
    },
    decorators: [
        (Story) => (
            <div style={{ position: 'relative', height: '100vh' }}>
                <Story />
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Blurred Effect</h1>
                        <p className="text-2xl drop-shadow-md">Background với hiệu ứng blur</p>
                    </div>
                </div>
            </div>
        ),
    ],
};

// Story demo multiple backgrounds (overlay)
export const Gradient: Story = {
    args: {
        src: 'https://images.unsplash.com/photo-1519167758481-83f29c8e717b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: 'Sunset background',
        className: 'brightness-75',
    },
    decorators: [
        (Story) => (
            <div style={{ position: 'relative', height: '100vh' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-5" />
                <div className="relative z-10 flex items-end justify-center h-full pb-20">
                    <Story />
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Gradient Overlay</h1>
                        <p className="text-xl">Background với gradient overlay</p>
                    </div>
                </div>
            </div>
        ),
    ],
};
