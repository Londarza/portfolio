export interface IImage {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }
  
  export interface ITestimonial {
    _type: 'testimonials';
    name: string;
    company: string;
    imageUrl: IImage;
    feedback: string;
  }
  
  export interface IAboutUs {
    _type: 'abouts';
    title: string;
    description: string;
    imgUrl: IImage;
  }
  
  export interface IBrand {
    _type: 'brands';
    name: string;
    imgUrl: IImage;
  }
  
  export interface IContact {
    _type: 'contact';
    name: string;
    email: string;
    message: string;
  }
  
  export interface IWorkExperience {
    _type: 'workExperience';
    name: string;
    company: string;
    desc: string;
  }
  
  export interface IExperience {
    _type: 'experiences';
    year: string;
    works: IWorkExperience[];
  }
  
  export interface ISkill {
    _type: 'skills';
    name: string;
    bgColor: string;
    icon: IImage;
  }
  
  export interface IWork {
    _type: 'works';
    title: string;
    description: string;
    projectLink: string;
    codeLink: string;
    imgUrl: IImage;
    tags: string[];
  }

  export interface IContactFormData {
    name: string;
    email: string;
    message: string;
  }

  export interface IWorkTag {
    name: string;
  }

  export interface NavigationDotsProps {
    active: string;
  }