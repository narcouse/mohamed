import { useState, useMemo, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOGS } from '../data';
import { BlogPost } from '../types';
import { Search, Calendar, Clock, ArrowRight, X, User, Tag, ArrowLeft, Heart, Share2 } from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [likedArticles, setLikedArticles] = useState<Record<string, boolean>>({});
  const [shareToast, setShareToast] = useState(false);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(BLOGS.map((blog) => blog.category)))];
  }, []);

  const filteredBlogs = useMemo(() => {
    return BLOGS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleLike = (articleId: string, e: MouseEvent) => {
    e.stopPropagation();
    setLikedArticles((prev) => ({
      ...prev,
      [articleId]: !prev[articleId],
    }));
  };

  const handleShare = (post: BlogPost, e: MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/#/blog?id=${post.id}`);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 2500);
    }
  };

  return (
    <div
      id="blog-main-page"
      className="min-h-screen bg-navy-950 pt-32 pb-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Dynamic Floating Toast Notification */}
      <AnimatePresence>
        {shareToast && (
          <motion.div
            initial={{ opacity: 0, y: -30, x: '-50%', scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: -30, x: '-50%', scale: 0.9 }}
            className="fixed top-24 left-1/2 z-50 bg-brand-teal text-white px-6 py-3 rounded-full shadow-xl shadow-brand-teal/20 border border-brand-teal-light/25 font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Article Deep Link Copied to Clipboard
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-brand-teal/5 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-[5%] w-80 h-80 bg-brand-gold/5 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!activeArticle ? (
            /* BLOG LISTING VIEW */
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Header Headline */}
              <div className="text-left space-y-4">
                <span className="font-mono text-xs font-bold text-brand-teal-light tracking-widest uppercase block">
                  Knowledge Hub
                </span>
                <h1 className="font-display text-4xl sm:text-5.5xl font-bold text-white tracking-tight leading-none">
                  MERMO LLC Insight Center
                </h1>
                <p className="font-sans text-slate-350 text-base sm:text-lg font-light max-w-2xl">
                  Deep engineering guidelines, branding psychology research, and comprehensive organic search auditing tutorials.
                </p>
              </div>

              {/* Advanced Search & Filtering Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-md">
                
                {/* Search Bar Input */}
                <div className="md:col-span-5 relative">
                  <Search className="w-4.5 h-4.5 text-slate-450 absolute left-4.5 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    id="blog-search-input"
                    placeholder="Search engineering papers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-navy-950 border border-white/10 hover:border-white/20 focus:border-brand-teal focus:outline-none rounded-xl pl-12 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 font-sans transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Category selectors */}
                <div className="md:col-span-7 flex flex-wrap items-center gap-2 md:justify-end">
                  {categories.map((category) => (
                    <button
                      key={category}
                      id={`category-pill-${category.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-display text-xs font-medium cursor-pointer transition-colors duration-200 ${
                        selectedCategory === category
                          ? 'bg-brand-teal text-white border border-brand-teal'
                          : 'bg-white/5 hover:bg-white/10 text-slate-350 hover:text-white border border-white/5'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Articles Grid Listing */}
              {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBlogs.map((post, index) => (
                    <motion.article
                      key={post.id}
                      id={`blog-article-${post.id}`}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      onClick={() => {
                        setActiveArticle(post);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group flex flex-col bg-charcoal-900 border border-white/5 hover:border-brand-teal/40 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:-translate-y-1.5 transition-all duration-350 h-full"
                    >
                      {/* Image Thumbnail */}
                      <div className="h-52 relative overflow-hidden shrink-0 border-b border-white/5">
                        <img
                          src={post.image}
                          alt={post.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-navy-950/85 backdrop-blur-md rounded-lg font-display text-[10px] font-semibold text-brand-teal-light uppercase tracking-wider border border-white/5">
                          {post.category}
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-4">
                        <div className="space-y-3">
                          {/* Metadata */}
                          <div className="flex items-center space-x-4 text-[11px] font-mono text-slate-450">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="font-display font-semibold text-lg text-white group-hover:text-brand-teal-light transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h3>
                          <p className="font-sans text-slate-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Interactive Footer list item */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-2">
                          <span className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-white tracking-wider uppercase group-hover:text-brand-teal-light transition-colors">
                            Read Article
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>

                          <div className="flex items-center space-x-2">
                            <button
                              id={`like-post-btn-${post.id}`}
                              onClick={(e) => toggleLike(post.id, e)}
                              className={`p-2 rounded-lg border border-white/5 whitespace-nowrap overflow-hidden hover:bg-white/5 transition-colors ${
                                likedArticles[post.id] ? 'text-rose-500' : 'text-slate-450'
                              }`}
                            >
                              <Heart className={`w-3.5 h-3.5 ${likedArticles[post.id] ? 'fill-current' : ''}`} />
                            </button>
                            <button
                              id={`share-post-btn-${post.id}`}
                              onClick={(e) => handleShare(post, e)}
                              className="p-2 rounded-lg border border-white/5 hover:bg-white/5 text-slate-450 hover:text-white"
                            >
                              <Share2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                /* EMPTY SEARCH STATE */
                <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl max-w-xl mx-auto space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mx-auto">
                    <Search className="w-6 h-6 text-slate-500" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg">No Papers Found</h3>
                  <p className="font-sans text-slate-450 text-sm max-w-sm mx-auto leading-relaxed">
                    We couldn't locate any logs matching "{searchQuery}". Try auditing with broader categories.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="px-5 py-2 rounded-lg bg-white/5 text-white border border-white/10 text-xs font-semibold uppercase tracking-wider"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            /* DETAILED SINGLE BLOG READER VIEW */
            <motion.div
              key="reader-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto space-y-8 text-left"
            >
              {/* Back Nav */}
              <button
                id="blog-back-to-list-btn"
                onClick={() => {
                  setActiveArticle(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 text-slate-400 hover:text-white font-display text-xs font-semibold uppercase tracking-wider py-2"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Knowledge Hub
              </button>

              {/* Title & Metadata */}
              <div className="space-y-4">
                <span className="px-3 py-1.5 bg-brand-teal/15 text-brand-teal-light rounded-lg font-display text-xs font-semibold tracking-wider uppercase border border-brand-teal/20">
                  {activeArticle.category}
                </span>
                <h1 className="font-display text-2.5xl sm:text-4.5xl font-bold text-white tracking-tight leading-[1.12]">
                  {activeArticle.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 pt-2 border-b border-white/5 pb-6 text-slate-450 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-teal-light" />
                    <span>{activeArticle.author.name} (Role: {activeArticle.author.role})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-teal-light" />
                    <span>{activeArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-teal-light" />
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Large Cover Image */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/5">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Body Layout */}
              <div className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 max-w-none pr-2 pt-4">
                {activeArticle.content.split('\n\n').map((para, pIdx) => {
                  if (para.startsWith('###')) {
                    return (
                      <h3 key={pIdx} className="font-display text-lg sm:text-xl font-semibold text-white pt-4 tracking-tight">
                        {para.replace('###', '').trim()}
                      </h3>
                    );
                  }
                  if (para.startsWith('*')) {
                    const listItems = para.split('\n');
                    return (
                      <ul key={pIdx} className="list-disc pl-6 space-y-2.5 text-slate-350">
                        {listItems.map((li, lIdx) => (
                          <li key={lIdx}>
                            {li.replace('*', '').trim()}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={pIdx} className="font-light text-slate-300">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Sharing & Closing Actions Pane */}
              <div className="pt-8 border-t border-white/5 mt-10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <button
                    id="like-active-article-btn"
                    onClick={(e) => toggleLike(activeArticle.id, e)}
                    className={`flex items-center gap-1.5 px-4 py-2 border rounded-xl font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      likedArticles[activeArticle.id]
                        ? 'bg-rose-500/10 border-rose-500/20 text-rose-500'
                        : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedArticles[activeArticle.id] ? 'fill-current' : ''}`} />
                    {likedArticles[activeArticle.id] ? 'Liked Work' : 'Like Article'}
                  </button>
                  <button
                    id="share-active-article-btn"
                    onClick={(e) => handleShare(activeArticle, e)}
                    className="flex items-center gap-1.5 px-4 py-2 border border-white/10 rounded-xl text-slate-400 hover:text-white font-display text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Share Link
                  </button>
                </div>

                <button
                  id="close-reader-view-btn"
                  onClick={() => {
                    setActiveArticle(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-display text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Return to Hub
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
