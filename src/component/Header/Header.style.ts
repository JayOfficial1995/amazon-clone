import styled from 'styled-components'

import { CustomContainerStyle, CenteredLayout, FlexBox } from '../../style/Common.style'


export const HeaderStyle = styled.nav`
position: fixed;
width: 100%;
top: 0;
left: 0;
height: 6rem;
background: ${(props)=>props.theme.color.darkBlueColor};
color: ${(props)=>props.theme.color.whiteColor};

.navbar-container {
    ${CustomContainerStyle};
    ${CenteredLayout};
    ${FlexBox};

    justify-content: flex-start;
    height: 6rem;

    .logo-wrapper {
        margin-top: 1rem;

        .logo{
            max-width: 100%;
            height: 5rem;
        }
    }

    .header-search{
    ${FlexBox};

    margin-right: 1rem;
    flex: 1;

        .search-bar{
            outline: none;
            padding: 1rem;
            width: 100%;
            border-radius: .4rem 0 0 .4rem;
            border: none;
        }

        .search-icon{
            height: 3.5rem;
            width: 3.5rem;
            padding: .5rem;
            border-radius: 0 .4rem .4rem 0;
            background: ${(props)=>props.theme.color.dullOrangeColor};
            color: ${(props)=>props.theme.color.darkBlueColor};
            cursor: pointer;

            &:hover{
                background: ${(props)=>props.theme.color.orangeColor};
            }
        }
    }

    .header-nav{
    ${FlexBox};
        
       .nav-items{
        margin-right: 2rem;

        .nav-title{
            font-size:${(props)=>props.theme.fontSize.h3};
        }

        .nav-link{
            font-size:${(props)=>props.theme.fontSize.h2};
        }
       }

       .basket-items{
        ${FlexBox};

           .basket-icon {
            height: 2.5rem;
            width: 2.5rem;
            margin-right: 1rem;
           }

           .item-count{
            font-size:${(props)=>props.theme.fontSize.h3};
           }
       }
    }
}

`