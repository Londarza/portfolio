

const testimonials = {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [{
        name: 'name',
        title: 'Name',
        type: 'string'
    },
    {
        name: 'company',
        title: 'Company',
        type: 'string'
    },
    {
        name: 'imageURL',
        title: 'IMGurl',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'feedback',
        title: 'Feedback',
        type: 'string'
    },
    ]
}
const aboutUs = {
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}
const brands={
    name:'brands',
    title:'Brands',
    type: 'document',
    fields:[
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        }
    ]
}
const contact = {
    name:'contact',
    title:'Contact',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'email',
            title:'Email',
            type:'string'
        },
        {
            name:'message',
            title:'Message',
            type:'text'
        }
    ]
}
const experiences = {
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}
const skills= {
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}
const workExperience = {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {name:'name',
               title:'name',
               type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
                type:'string'
            }
    ]
}

const works = {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };
export const schemaTypes = [testimonials, aboutUs, brands, contact, skills, workExperience, works, experiences]
