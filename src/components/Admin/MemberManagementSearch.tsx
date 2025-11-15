import Search from '../../assets/imgs/Search.svg';

const MemberManagementSearch = () => {
  return (
    <div className="flex flex-center w-320 h-52 border-2 border-border rounded-full px-20">
      <input
        type="text"
        className="flex-1 text-white text-20 font-600 bg-transparent focus:outline-none"
        placeholder="검색"
      />
      <img src={Search} alt="검색 아이콘" className="w-20 h-20" />
    </div>
  );
};

export default MemberManagementSearch;
