
import { Metadata, MetadataRoute } from "next";

export default function sitempap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'http://localhost:3000/',
            lastModified: new Date()
        },
        {
            url: 'http://localhost:3000/interior-design',
            lastModified: new Date()
        },
        {
            url: 'http://localhost:3000/construction',
            lastModified: new Date()
        },
        {
            url: 'http://localhost:3000/news',
            lastModified: new Date()
        },
        {
            url:'http://localhost:3000/about',
            lastModified:new Date()
        },
        {
            url:'http://localhost:3000/contact',
            lastModified:new Date()
        },
        {
            url:'http://localhost:3000/login',
            lastModified:new Date()
        }
    ]
}