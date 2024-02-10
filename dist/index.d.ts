/// <reference types="react" />
import React$1 from 'react';

interface PageProps {
    title: string;
    children: React.ReactNode;
}

declare const Page: React$1.FC<PageProps>;

export { Page };
