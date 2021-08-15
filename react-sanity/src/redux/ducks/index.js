import { combineReducers } from "redux";
import Review from './Review';
import Team from './Team';
import Skill from "./Skill";
import Project from './Project';
import Blog from './Blog';
import Service from "./Service";
import Category from './Category';
import Error from './Error';

const allReducers = combineReducers({
    review: Review,
    team: Team,
    skill: Skill,
    project: Project,
    blog: Blog,
    service: Service,
    category: Category,
    err: Error
});

export default allReducers;