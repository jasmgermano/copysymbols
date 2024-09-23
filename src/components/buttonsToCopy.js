import { useNavigate } from 'react-router-dom';

const buttonProps = {
  showAll: false,
  categoryData: [],
  category: "",
};

export default function ButtonsToCopy({ showAll, category, categoryData } = buttonProps) {
  const navigate = useNavigate();

  const copyToClipboard = (text, e) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
        const btn = e.target.closest("button");

        const originalSpan = btn.querySelector(".original");
        let copiedSpan = document.createElement("span");
        copiedSpan.className = "copied";
        copiedSpan.textContent = "copied!";
        btn.appendChild(copiedSpan);

        originalSpan.style.visibility = "hidden";
        copiedSpan.style.visibility = "visible";

        btn.style.backgroundColor = "black";
        btn.style.color = "white";

        setTimeout(() => {
          btn.style.backgroundColor = "white";
          btn.style.color = "black";

          originalSpan.style.visibility = "visible";
          copiedSpan = btn.removeChild(copiedSpan);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };

  const handleSeeMore = (category) => {
    navigate(`/${category}/`);
    window.scrollTo(0, 0)
  };

  return (
    <div>
      <div className="category" key={category}>
        <h1>{category}</h1>
        <div className={`text-to-copy-container ${category}`}>
          {(!showAll ? categoryData?.slice(0, 6) : categoryData)?.map(
            (item, i) => (
              <button
                className="text-to-copy"
                key={i}
                onClick={(e) => copyToClipboard(item, e)}
              >
                <span className="original">{item}</span>
              </button>
            )
          )}
        </div>
        {!showAll && categoryData.length > 6 && (
            <button onClick={() => handleSeeMore(category)} className="more">
            see more
            </button>            
        )}
      </div>
    </div>
  );
}
