import styled from "styled-components";

export const TestimonialsElement = styled.div`
  background: linear-gradient(180deg, #f7fbfc 0%, #eefcff 100%);
  padding-top: 120px;
  padding-bottom: 120px;
`;
export const TestimonialsBody = styled.div`
  padding: 20px;
`;
export const TestimonialsTitle = styled.div`
  font-family: "Allison", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #fb7dc1;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;
export const TestimonialsHeader = styled(TestimonialsTitle)`
  font-family: "zwodrei";
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  text-align: center;
  color: #23253b;
  padding-bottom: 60px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const TestimonialsName = styled(TestimonialsHeader)`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #23253b;
  display: flex;
  text-align-last: start;
  justify-content: left;
  padding-bottom: 20px;
`;
export const TestimonialsArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    place-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: left;
    -webkit-box-pack: center;
    margin: 0.25rem;
  }
`;
export const TestimonialsText = styled.div`
  font-family: "TTSupermolot Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #23253b;
  padding-bottom: 26px;
`;
export const TestimonialsVideo = styled.div`
  padding-bottom: 30px;
  video {
    border-radius: 8px;
    width: 416px;
  }
  @media (max-width: 768px) {
    video {
      width: 310px;
    }
  }
`;
export const TestimonialsCard = styled.div`
  display: grid;
  justify-content: right;
`;

export const TestimonialsCardRight = styled.div`
  display: grid;
  justify-content: left;
`;
